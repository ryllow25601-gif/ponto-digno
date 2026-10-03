(function(window){
  const CHAVE_CADASTRO="pontoDignoCadastro";
  function salvarCadastro(dados){window.localStorage.setItem(CHAVE_CADASTRO,JSON.stringify(dados));}
  function carregarCadastro(){
    const salvo=window.localStorage.getItem(CHAVE_CADASTRO);
    if(!salvo)return null;
    try{return JSON.parse(salvo);}catch(erro){console.error("Não foi possível recuperar o cadastro salvo.",erro);window.localStorage.removeItem(CHAVE_CADASTRO);return null;}
  }
  window.PontoDignoStorage={salvarCadastro,carregarCadastro};
})(window);