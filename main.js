// "Main" significa principal e já existe uma convenção de usar sempre esse nome para o arquivo JS principal de um site

function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}
/* PRIMEIRA PARTE ---------------
Uma opção seria buscar cada uma das teclas no documento e associar o clique ao som, da seguinte forma:
document.querySelector('.tecla_pom').onclick = tocaSomPom;

Poderia usar o "onclick='tocaSomPom()'" direto no botão, no arquivo HTML
*/

/* SEGUNDA PARTE ---------------
Para não precisar reescrever todo o código para cada um dos botões, podemos trabalhar com listas de elementos

Se buscarmos document.querySelectorAll('.tecla'), ele vai nos devolver todas as informações que contem essa expressão:

NodeList(9) [button.tecla.tecla_pom, button.tecla.tecla_clap, button.tecla.tecla_tim, button.tecla.tecla_puff, button.tecla.tecla_splash, button.tecla.tecla_toim, button.tecla.tecla_psh, button.tecla.tecla_tic, button.tecla.tecla_tom]
*/

const listaDeTeclas = document.querySelectorAll('.tecla');

/*
Para chamar os sons dessa lista, seria necessário associar cada um deles à função de referência, da seguinte forma:
listaDeTeclas[0].onclick = tocaSomPom
O que voltaria para o mesmo problema anterior
*/

/* TERCEIRA PARTE ---------------
A terceira opção é criar uma ferramenta de repetição que fará essa associação automaticamente */

function tocaSom (idElementoAudio) {
    document.querySelector (idElementoAudio).play();
}

let contador = 0; // Variável criada especificamente para dar uma condição para a repetição

/*while (contador <= listaDeTeclas.length) {

    const instrumento = listaDeTeclas[contador].classList[1];
    const idAudio = `#som_${instrumento}`;
   

    //console.log(idAudio);

    listaDeTeclas[contador].onclick = function () { // Essa função sem nome é chamada de "função anônima". Funções anônimas podem ser usadas somente em um contexto quando elas são o valor de algum atributo ou estão sendo armazenadas dentro de alguma referência constante ou variável
        tocaSom(idAudio)
    } 
    contador++;
    //console.log(contador);
}*/

/* ---------------- PERSONALIZAÇÃO MAIS PROFISSIONAL ---------------- */

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = listaDeTeclas[contador].classList[1];
    const idAudio = `#som_${instrumento}`;
    

    listaDeTeclas[contador].onclick = function () {
        tocaSom(idAudio);
    } 

    tecla.onkeydown = function (evento) {
        //onkeydown é o momento que a tecla está apertada
        console.log(evento.code) // vai retornar no console, as informações do eveto realizado (clicar no botão pelo teclado)

        if (evento.code === 'Space' || evento.code === 'Enter') { // O sinal || é o referente a "ou"
            tecla.classList.add('ativa')
        }
    }

    tecla.onkeyup = function () {
        //onkeyup é o momento que a tecla é solta
        tecla.classList.remove('ativa')
    }
}

/*
 function tocaSomNovo (seletorAudio) {
    const elemento = document.querySelector(seletorAudio)

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }

    else {
        console.log('Elemento não encontrado ou seletor inválido')
    }
 }
 
*/

