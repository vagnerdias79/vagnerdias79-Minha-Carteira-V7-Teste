import { readFile, writeFile } from "node:fs/promises";
import { geoEquirectangular, geoPath } from "d3-geo";
import { feature } from "topojson-client";
const topology=JSON.parse(await readFile(process.argv[2],"utf8"));
const countries=feature(topology,topology.objects.countries).features;
const projection=geoEquirectangular().fitExtent([[12,12],[928,448]],{type:"FeatureCollection",features:countries});
const path=geoPath(projection),hot=new Set(["076","124","250","276","356","380","392","724","826","840"]);
const paths=countries.map(c=>{const id=String(c.id).padStart(3,"0");return `<path class="country ${hot.has(id)?"exposed ":""}c-${id}" d="${path(c)}"/>`;}).join("");
await writeFile(process.argv[3],`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 940 460" aria-label="Mapa político mundial"><style>.o{fill:#071827}.country{fill:#17364e;stroke:#78a0bc;stroke-width:.55}.exposed{filter:drop-shadow(0 0 3px #168cff)}.c-840{fill:#2584ff}.c-124{fill:#4d9fff}.c-076{fill:#18c783}.c-250,.c-276,.c-380,.c-724,.c-826{fill:#3fd398}.c-356{fill:#f1b827}.c-392{fill:#e5a91d}</style><rect class="o" width="940" height="460" rx="16"/>${paths}</svg>`,"utf8");
