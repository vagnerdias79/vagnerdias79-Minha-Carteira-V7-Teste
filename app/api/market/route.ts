import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

function validSymbol(value: string) {
  return /^[A-Z0-9.-]{1,12}$/.test(value);
}

async function yahooQuote(symbol: string, market: string) {
  const target=market==="BR"&&!symbol.includes(".")?`${symbol}.SA`:symbol.replace(".","-");
  try{
    const r=await fetch(`https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(target)}?interval=1m&range=1d`,{cache:"no-store",headers:{"User-Agent":"Mozilla/5.0 NorthCapital/33.9"}});
    if(!r.ok)return null;const chart=(await r.json())?.chart?.result?.[0],meta=chart?.meta,price=Number(meta?.regularMarketPrice),previous=Number(meta?.chartPreviousClose??meta?.previousClose);
    return price>0?{price,changePercent:previous>0?(price-previous)/previous*100:0,currency:meta?.currency||(market==="BR"?"BRL":"USD"),marketTime:meta?.regularMarketTime||null,source:"YAHOO"}:null;
  }catch{return null;}
}
async function quote(symbol: string) {
  const stooq = symbol.toLowerCase().replace(".", "-") + ".us";
  const url = `https://stooq.com/q/l/?s=${encodeURIComponent(stooq)}&f=sd2t2ohlcv&h&e=csv`;
  try {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) return null;
    const rows = (await response.text()).trim().split(/\r?\n/);
    if (rows.length < 2) return null;
    const headers = rows[0].split(",");
    const values = rows[1].split(",");
    const record = Object.fromEntries(headers.map((key, index) => [key, values[index]]));
    const price = Number(record.Close);
    return price > 0 ? { price, changePercent:0, currency:"USD", date: record.Date, source: "STOOQ" } : null;
  } catch {
    return null;
  }
}

export async function GET(request: NextRequest) {
  const raw = request.nextUrl.searchParams.get("symbols") || "";
  const brSymbols=new Set((request.nextUrl.searchParams.get("br")||"").split(",").map(s=>s.trim().toUpperCase()).filter(validSymbol));
  const symbols = [...new Set(raw.split(",").map((s) => s.trim().toUpperCase()).filter(validSymbol))].slice(0, 40);
  const [fxYahoo,fxResponse, entries] = await Promise.all([
    yahooQuote("BRL=X","US"),
    fetch("https://api.frankfurter.app/latest?from=USD&to=BRL", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null)).catch(() => null),
    Promise.all(symbols.map(async(symbol)=>{const market=brSymbols.has(symbol)?"BR":"US",current=await yahooQuote(symbol,market);return [symbol,current||(market==="US"?await quote(symbol):null)] as const;})),
  ]);
  return NextResponse.json({
    fx: Number(fxYahoo?.price)||Number(fxResponse?.rates?.BRL)||null,
    fxSource:fxYahoo?.price?"YAHOO":"FRANKFURTER",
    quotes: Object.fromEntries(entries.filter(([, value]) => value)),
    updatedAt: new Date().toISOString(),
  }, { headers: { "Cache-Control": "no-store" } });
}
