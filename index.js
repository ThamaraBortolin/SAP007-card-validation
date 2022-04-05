import validator from './validator.js';

let nome = document.querySelector("#nome"); /*todas as variaveis declaradas que serão utilizadas abaixo nos eventos*/
let cc = document.querySelector("#cc");
let botao = document.getElementById('botao');
let mes = document.querySelector('#mes');
let ano = document.querySelector('#ano')
botao.addEventListener("click", validar,flag); /*eventos trelados as variaveis acima, click é evento do click do cursor e keyup evento de digitar*/
nome.addEventListener("keyup", clonarnome);
cc.addEventListener("keyup", clonarcc);
mes.addEventListener("keyup", data);
ano.addEventListener("keyup", data);

function clonarnome() {
  /*fuções para atribuir valor de um input para outro. origin, o input em que se insere o valor e clone o que recebe o valor*/
  let originnome = document.querySelector("#nome").value;

  if (originnome != null) {
    document.querySelector("#clonenome").value = document.querySelector("#nome").value.toUpperCase();
  }
}

function clonarcc() {
  /*função de atribuir valor com mascara*/
  let cc1 = document.querySelector('#cc').value;
  let masc = validator.maskify(cc1);

  document.querySelector('#clonecc').value = masc
}

function data() {
  /*função para limitar caracteres em validade*/
  let mes = document.querySelector('#mes');
  let ano = document.querySelector('#ano');

  if (mes.value.length > 2) {
    /*usamos essa função parea puxar o valor, especificarmos que estamos mexendo com caracteres e limitamos ele por sybstring*/
    mes.value = mes.value.substring(0, 2)
  }
  if (ano.value.length > 2) {
    ano.value = ano.value.substring(0, 2)
  }
  return document.querySelector('#clonemes').value = document.querySelector('#mes').value + "/" + document.querySelector('#ano').value;
}


function validar() {
  /*função atrelada ao evento de click no botao validar cartão*/
  let cc2 = document.getElementById('cc');
  let resultado = document.getElementById('nome2');
  let mensagem = "";

  if (cc2.value == "") {
    /*condição para não permitir campo vazio no input de numero de cartão*/
    alert('É necessário preencher o campo do número de cartão')

  } else {

    if (validator.isValid(cc2.value)) {
      /*condição para mostrar se o cartao é valido ou nao, puxa o calculo do validator e a função is valid e atrelamos o valor o cc2.value */
      mensagem = "Válido";

    } else {
      mensagem = "Inválido";
    }
    resultado.textContent = mensagem;
  }

}

function flag(numbersCard) {
  let flagCard = ''
  if (numbersCard.charAt(0) == 4) {
    flagCard = ' Visa'
    return flagCard
  }
  if (numbersCard.charAt(0) == 3) {
    if (numbersCard.charAt(0) == 3 && numbersCard.charAt(1) == 4) {
      flagCard = " American Express"
      return flagCard
    } else if (numbersCard.charAt(1) == 6) {
      flagCard = " Diner's Club / International"
      return flagCard
    }
    else if (numbersCard.charAt(1) == 7) {
      flagCard = " American Express"
      return flagCard
    }
    else if (numbersCard.charAt(1) == 8) {
      flagCard = " Diner's Club / Carte Blanche"
      return flagCard
    } else if (numbersCard.charAt(1) == 0 && numbersCard.charAt(2) >= 0 &&
      numbersCard.charAt(2) <= 5) {
      flagCard = " Diner's Club / Carte Blanche"
      return flagCard
    } else {
      flagCard = " JBC"
      return flagCard
    }
  }
  if (numbersCard.charAt(0) == 5 && numbersCard.charAt(1) >= 1 &&
    numbersCard.charAt(1) <= 5) {
    flagCard = " MasterCard"
    return flagCard
  }
  if (numbersCard.charAt(0) == 6 && numbersCard.charAt(1) == 0 &&
    numbersCard.charAt(2) == 1 && numbersCard.charAt(3) == 1) {
    flagCard = " Discover"
    return flagCard
  }
  if (numbersCard.charAt(0) == 1 && numbersCard.charAt(1) == 8 &&
    numbersCard.charAt(2) == 0 && numbersCard.charAt(3) == 0) {
    flagCard = " JCB"
    return flagCard
  }
  if (numbersCard.charAt(0) == 2) {
    if (numbersCard.charAt(1) == 1) {
      if (numbersCard.charAt(2) == 3 && numbersCard.charAt(3) == 1) {
        flagCard = ' JCB'
        return flagCard
      } else if (numbersCard.charAt(2) == 4 && numbersCard.charAt(3) == 9) {
        flagCard = " Diner's Club / enRoute"
        return flagCard
      }
    } else if (numbersCard.charAt(1) == 0 && numbersCard.charAt(2) == 1 &&
      numbersCard.charAt(3) == 4) {
      flagCard = " Diner's Club / enRoute"
      return flagCard
    }
  }
  if (numbersCard.charAt(0) == 6 && numbersCard.charAt(1) == 0 && numbersCard.charAt(2) == 6 &&
    numbersCard.charAt(3) == 2) {
    flagCard = " HiperCard"
    return flagCard
  }
  flagCard = " sem bandeira"
  console.log(flagCard)
  return flagCard

}

