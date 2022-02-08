import validator from './validator.js';

let nome = document.querySelector("#nome");
let cc = document.querySelector("#cc");
let botao = document.getElementById('botao');
let mes = document.querySelector('#mes');
let ano = document.querySelector('#ano')
let github = document.querySelector('#github')
let linkedin = document.querySelector('#linkedin')
botao.addEventListener("click", validar);/*evento de click no botao para validar o cartao*/
nome.addEventListener("keyup", clonarnome);/*eventos de teclar para aparecer no cartao os dados do cliente enquanto ele digita*/
cc.addEventListener("keyup", clonarcc);
mes.addEventListener("keyup",data);
ano.addEventListener("keyup",data);
github.addEventListener("click", link1)
linkedin.addEventListener("click", link2)

function clonarnome() {/*fuções para atribuir valor de um input para outro*/
  let originnome = document.querySelector("#nome").value;

  if (originnome != null) {
    document.querySelector("#clonenome").value = document.querySelector("#nome").value.toUpperCase();
  }
}

function clonarcc() {
  let cc1 = document.querySelector('#cc').value;
  let masc = validator.maskify(cc1);

  document.querySelector('#clonecc').value = masc
}

function data() {
  let mes = document.querySelector('#mes');
  let ano = document.querySelector('#ano');

  if (mes.value.length > 2) {
    mes.value = mes.value.substring(0, 2)
  }
  if (ano.value.length > 2) {
    ano.value = ano.value.substring(0, 2)
  }
  return document.querySelector('#clonemes').value = document.querySelector('#mes').value + "/" + document.querySelector('#ano').value;
}


function validar() { /*função atrelada ao evento de clicl*/
  let cc2 = document.getElementById('cc');
  let resultado = document.getElementById('nome2');
  let mensagem = "";

  if (cc2.value == "") {
    alert('É necessário preencher o campo do número de cartão')

  } else {

    if (validator.isValid(cc2.value)) { /*caso há mais que 13 digitos a condição é mostrar se o cartao é valido ou nao*/
      mensagem = "Válido";

    } else {
      mensagem = "Inválido";
    }
    resultado.textContent = mensagem;
  }

}

function link1() {
  window.location.href = "https://github.com/ThamaraBortolin"
}

function link2() {
  window.location.href = "https://www.linkedin.com/in/thamara-bortolin1999/"
}
