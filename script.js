//banco de dados
//import sqlite3 from 'sqlite3';
//import {open} from 'https://esm.sh/sql.js@1.8.0';
let main;
let barradenav;
async function AddJogo(image,nome,resumo,link) {
    const bancoDeDados = await open({
        filename: "./banco.db",
        driver: sqlite3.Database
    })
    //criar tabela
    bancoDeDados.run(`CREATE TABLE if not EXISTS jogos(
  id integer PRIMARY key AUTOINCREMENT,
  nome_jogo text,
  resumo_jogo text ,
  link_jogo text ,
  imgLink_jogo text 
);
`);
bancoDeDados.run(`insert into jogos(nome_jogo, resumo_jogo, link_jogo, imgLink_jogo) values (?,?,?,?)`,[nome,resumo,link,image])
    
}
//AddJogo('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiAUuLs6h3WU32IzQ3vQ5CsrfcSvGJlYKW4HYA9d0oYA&s=10','one','numero 1','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiAUuLs6h3WU32IzQ3vQ5CsrfcSvGJlYKW4HYA9d0oYA&s=10');
async function acessarbanco() {
    const bancoDeDados = await open({
        filename: "./banco.db",
        driver: sqlite3.Database
    });
    bancoDeDados.run(`select * from jogos where id = 1;`)
}
//acessarbanco();




function menuBarraCriar(){
return` 
<div class="barra-dec"></div>

<nav id="side-bar">
<div>
    <div class="settings">
        <a href="config.html"><img src="imagens/logoecit.png" alt="logo-improvisada.jlpg" id="fotinha"></a>
    </div>
    <p id="textodosubheader">usuario</p>
<nav id="navegacao">
<a href="facts.html" id="nav-menu"><i class="material-icons" >question_answer</i> mensagens</a>
<a href="index.html" id="nav-menu"><i class="material-icons" >play_circle_filled</i>jogos</a>
<a href="news.html" id="nav-menu"><i class="material-icons" >backup</i>post</a>
<a href="news.html" id="nav-menu"><i class="material-icons" >star</i>favoritos</a>
</nav>
</div>
</nav>
`
}
function criarpesquisa(){
    return``
}
//declaração dos jogos e os paths para jogar
const jogos = [
            {image:"jogos/jogo_matematica/jonas.png",nome:"jogo do jonas",resumo:"um pinguim deve buscar o sol para trazer a luz, um jogi definitivamente nada relaxante",arquivo:"https://scratch.mit.edu/projects/1394831091/embed"},
            {image:"jogos/jogo_espanhol/acercaoulejo.jpg",nome:"acerca ou lejos",resumo:"um quiz de espanhol sobre perto ou longe para desafiar seu conhecimento",arquivo:"jogos/jogo_espanhol/jogo.html"},
            {image:"jogos/jogo_matematica/matematicos-image.png",nome:"matematicos",resumo:"um quiz de matematica para testar sua habilidade de calculos ",arquivo:"https://scratch.mit.edu/projects/1325608350/embed"},
            {image:"jogos/jogo_matematica/matematicos-image.png",nome:"campo minado",resumo:"um jogo de campo minado feito no scratch!",arquivo:"https://scratch.mit.edu/projects/1185447834/embed"},
            {image:"jogos/jogo_matematica/doom.jpg",nome:"doomscratcher",resumo:"o site roda doom ",arquivo:"https://scratch.mit.edu/projects/324569477/embed"},
            {image:"jogos/jogo_matematica/matematicos-image.png",nome:"a morte do sans",resumo:"uma batalha mortal contra o sans ",arquivo:"https://scratch.mit.edu/projects/1047361223/embed"},
            {image:"jogos/jogo_matematica/minecraft.jpg",nome:"minercrafter",resumo:"o minecraft de apenas 2 dimensões feito por griffpatch ",arquivo:"https://scratch.mit.edu/projects/10128407/embed"}
    ];

//id e presets gerais utilizados

function carregarPaginaInicial(){
    main.innerHTML=`<label id="search"><i class="material-icons" id="lupinha">search</i><input id="pesquisa"></label>
    <div id="card-box">
    </div>`;

    const pesquisar = document.getElementById("pesquisa");

    pesquisar.addEventListener("input", ()=>{
        const pesquisa = document.getElementById("pesquisa").value;
        carregarjogos(pesquisa);
        });
    carregarjogos("");
}
//carregando os conteudos principais
function carregarjogos(pesquisar){
    let cardbox = document.getElementById("card-box");
    cardbox.innerHTML = "";
    jogos.forEach(jogo => {
        //função de pesquisa, caso o input esteja vazio, todos os jogos são carregados, 
        // caso haja algo escrito, apenas os jogos que contenham a palavra escrita serão carregados
        console.log(pesquisar);
        if (pesquisar===""){
            const card = document.createElement("div");
        card.classList.add("card");
        
        card.innerHTML = `
        <img src="${jogo.image}" alt="banner do jogo" id="banner-jogo">
        <ul class="card--line">
        <h3 id="titulo-jogo">${jogo.nome}</h3>
        <p id="resumo-jogo">${jogo.resumo}</p><br>
        
        <button onclick="jogar('${jogo.arquivo}')" id="link-do-jogo"><i class="material-icons">play_circle</i>jogar</button>
        </ul>
        `;
        cardbox.appendChild(card);} 
        else if(jogo.nome.toLocaleLowerCase().includes(pesquisar.toLocaleLowerCase())){
        const card = document.createElement("div");
        card.classList.add("card");
        
        card.innerHTML = `
        <img src="${jogo.image}" alt="banner do jogo" id="banner-jogo">
        <ul class="card--line">
        <h3 id="titulo-jogo">${jogo.nome}</h3>
        <p id="resumo-jogo">${jogo.resumo}</p><br>
        
        <button onclick="jogar('${jogo.arquivo}')" id="link-do-jogo">jogar</button>
        </ul>
        `;
        cardbox.appendChild(card);}
        if (cardbox.innerHTML === "") {
    cardbox.innerHTML = `<p style="text-align: center; width: 100%; color:rgb(74, 76, 84)">Nenhum jogo encontrado para "${pesquisar}".</p>`;
}
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
     barradenav = document.getElementById("header");
     main = document.getElementById("conteudo");
    if (barradenav) {
        barradenav.innerHTML = menuBarraCriar();
    }
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
