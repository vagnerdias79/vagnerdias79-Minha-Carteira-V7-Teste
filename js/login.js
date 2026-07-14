'use strict';
// Login isolado do restante do Dashboard para funcionar mesmo se APIs externas falharem.
    window.mcUnlock = function () {
      var campo = document.getElementById('lockPwd');
      var erro = document.getElementById('lockErr');
      var senha = String(campo && campo.value || '').replace(/\s+/g, '');
      if (senha !== '1579') {
        if (erro) erro.textContent = 'Senha incorreta.';
        if (campo) { campo.value = ''; campo.focus(); }
        return false;
      }
      if (erro) erro.textContent = '';
      var bloqueio = document.getElementById('lockScreen');
      var aplicativo = document.getElementById('app');
      if (bloqueio) bloqueio.style.display = 'none';
      if (aplicativo) aplicativo.style.display = 'block';
      if (campo) campo.value = '';
      setTimeout(function () {
        if (typeof window.iniciarCarteira === 'function') window.iniciarCarteira();
      }, 0);
      return false;
    };
    document.getElementById('loginForm').onsubmit = function (e) {
      if (e) e.preventDefault();
      return window.mcUnlock();
    };
    document.getElementById('lockPwd').onkeydown = function (e) {
      if (e.key === 'Enter') { e.preventDefault(); window.mcUnlock(); }
    };
