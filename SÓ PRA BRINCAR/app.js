'use strict'

function perfilLinkedIn() {
    window.open("https://www.linkedin.com/in/bruno-ferreira-4b4b69194")
};

function ajusteRodape() {

    const alturaRodape = document.getElementById("ft");
    const heightRodape = alturaRodape.scrollHeight;
    console.log(heightRodape);

    var heightTela = window.innerHeight;
    console.log(heightTela);

    const element = document.getElementById("body");
    const heightBody = element.scrollHeight;
    console.log(heightBody);


    if (heightBody > heightTela - heightRodape) {
        let elemento = document.getElementById("ft")
        elemento.classList.toggle("relativo");
    }
};
    

    var tema = document.getElementById("tema");
    tema.innerHTML = "Alternar Tema: Escuro";

    
function temas() {
    document.body.classList.toggle('ligth-theme');

        if (document.body.className == 'dark-theme') {
        tema.innerHTML = "Alternar Tema: Escuro";
        console.log("Tema Atual: Escuro");
    }
    else {
        tema.innerHTML = "Alternar Tema: Claro";
        console.log("Tema Atual: Claro");
};
};

function confirmando() {
    
var password = "l3173 n1nh0"
var passwordc = prompt('Sabe a senha?')
if (password === passwordc) {

const d = new Date;
var hour = d.getHours();
let message = 'Bom Dia Bruno!';
console.log('Data e hora de acesso: ' + Date());

if (hour >= 1 && hour < 12) {
    window.alert(message);
    console.log(message);
};

if (hour >= 12 && hour < 18) {
    message = message.replace('m Dia', 'a Tarde');
    window.alert(message);
    console.log(message);
};

if (hour >= 18 && hour < 24) {
    message = message.replace('m Dia', 'a Noite');
    window.alert(message);
    console.log(message);
};

window.open("C:/Users/aeaeb/.vscode/SÓ%20PRA%20BRINCAR/views/tarefas.html")
//location.replace("C:/Users/aeaeb/.vscode/SÓ%20PRA%20BRINCAR/menu.html");


}
else {
    window.alert('Senha incorreta, tente outra vez!');
};
};


function nada() {

    const qntd = document.getElementsByTagName("li").length;
    console.log(qntd);
    if (qntd === 0) {   

    var nenhum = document.getElementById("nenhum"); 
    nenhum.innerHTML = "Não há atividades a serem feitas no momento, estou aberto a sugestões :)";
    console.log(nenhum.innerHTML);
}
};

