const barradenav = document.getElementById("header");

function menuBarraCriar(){
return` 
<li class="top-bar">
    <li class="ritgh-top-corner">
        <img src="imagens/logoecit.png" alt="logo-improvisada.jlpg" id="logo">
        <a href=""><i class="bi bi-gear" id="gear"></i></a>
    </li>
    <li class="pos-pesquisar">
        <input type="text" id="pesquisa"><i class="bi bi-search" id="lupa"></i>
        
    </li>
</li>
<nav id="navegacao">
<a href="facts.html" id="nav-menu">sobre</a>
<a href="index.html" id="nav-menu">pagina inicial</a>
<a href="news.html" id="nav-menu">noticias</a>

</nav>
`
}
//declaração dos jogos e os paths para jogar
const jogos = [
            {image:"jogos/jogo_espanhol/acercaoulejo.jpg",nome:"acerca ou lejos",resumo:"um quiz de espanhol sobre perto ou longe para desafiar seu conhecimento",arquivo:"jogos/jogo_espanhol/jogo.html"},
            {image:"jogos/jogo_matematica/matematicos-image.png",nome:"matematicos",resumo:"um quiz de matematica para testar sua habilidade de calculos ",arquivo:"jogos/jogo_matematica/index.html"},
            {image:"jogos/jogo_matematica/matematicos-image.png",nome:"campo minado",resumo:"um jogo de campo minado feito no scratch!",arquivo:"jogos/campo_minado/campoMInado.html"},
            {image:"jogos/jogo_matematica/matematicos-image.png",nome:"a morte do sans",resumo:"uma batalha mortal contra o sans ",arquivo:"jogos/jogo_sans/sans.html"}
    ];
//id e presets gerais utilizados
const main = document.getElementById("conteudo");
barradenav.innerHTML = menuBarraCriar();

//carregando os conteudos principais
function carregarPaginaInicial(){
    main.innerHTML="";
   const pesquisa = document.getElementById("pesquisa").value;

    jogos.forEach(jogo => {
        if (pesquisa===""){
            const card = document.createElement("div");
        card.classList.add("card");
        
        card.innerHTML = `
        <img src="${jogo.image}" alt="banner do jogo" id="banner-jogo">
        <ul class="card--line">
        <h3 id="titulo-jogo">${jogo.nome}</h3>
        <p id="resumo-jogo">${jogo.resumo}</p><br>
        
        <a href="${jogo.arquivo}" id="link-do-jogo">jogar</a>
        </ul>
        `;
        main.appendChild(card);} 
        else if(jogo.nome.toLocaleLowerCase().includes(pesquisa.toLocaleLowerCase())){
        const card = document.createElement("div");
        card.classList.add("card");
        
        card.innerHTML = `
        <img src="${jogo.image}" alt="banner do jogo" id="banner-jogo">
        <ul class="card--line">
        <h3 id="titulo-jogo">${jogo.nome}</h3>
        <p id="resumo-jogo">${jogo.resumo}</p><br>
        
        <a href="${jogo.arquivo}" id="link-do-jogo">jogar</a>
        </ul>
        `;
        main.appendChild(card);}
    });
}
//aba do sobre ou abouts
function carregarFacs(){
  main.innerHTML = `
<div class="texto">
<h2>
    sobre este projeto
</h2>
<p>
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
</p>
</div>
  `;
}
//aba de noticias
function carregarNews(){
 main.innerHTML = `
<div class="texto">
 <h2>
    sobre este projeto
</h2>
<p>
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
</p>
<h2>não há noticias a serem ditas no momento</h2>
</div>
 `;
}
//aba das cofingurações
function config(){

}
//identificando qual a aba acessada
document.addEventListener("DOMContentLoaded", ()=>{

    const pagina = window.location.pathname.split("/").pop();
    if (pagina==="index.html" || pagina===""){
        carregarPaginaInicial();

    } else if(pagina==="facts.html"){
        carregarFacs();

    } else if(pagina==="news.html"){
        carregarNews();
    } else if (pagina==="config.html"){
        config();
    }
})
const pesquisar = document.getElementById("pesquisa");
pesquisar.addEventListener("input", ()=>{
    carregarPaginaInicial()
})