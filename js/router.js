(function(window,document){
  function navegarPara(rota){window.location.href=rota;}
  function iniciarRoteador(){
    document.querySelectorAll('a[href^="#/"]').forEach(function(link){link.addEventListener("click",function(event){event.preventDefault();const rota=link.getAttribute("href").replace(/^#\//,"");navegarPara(rota+".html");});});
  }
  window.PontoDignoRouter={navegarPara,iniciarRoteador};
})(window,document);