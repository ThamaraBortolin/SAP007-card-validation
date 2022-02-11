import validator from './validator.js';

let nome = document.querySelector("#nome");/*todas as variaveis declaradas que serão utilizadas abaixo nos eventos*/
let cc = document.querySelector("#cc");
let botao = document.getElementById('botao');
let mes = document.querySelector('#mes');
let ano = document.querySelector('#ano')
let github = document.querySelector('#github')
let linkedin = document.querySelector('#linkedin')
botao.addEventListener("click", validar);/*eventos trelados as variaveis acima, click é evento do click do cursor e keyup evento de digitar*/
nome.addEventListener("keyup", clonarnome);
cc.addEventListener("keyup", clonarcc);
mes.addEventListener("keyup",data);
ano.addEventListener("keyup",data);
github.addEventListener("click", link1)
linkedin.addEventListener("click", link2)

function clonarnome() {/*fuções para atribuir valor de um input para outro. origin, o input em que se insere o valor e clone o que recebe o valor*/
  let originnome = document.querySelector("#nome").value;

  if (originnome != null) {
    document.querySelector("#clonenome").value = document.querySelector("#nome").value.toUpperCase();
  }
}

function clonarcc() {/*função de atribuir valor com mascara*/
  let cc1 = document.querySelector('#cc').value;
  let masc = validator.maskify(cc1);

  document.querySelector('#clonecc').value = masc
}

function data() {/*função para limitar caracteres em validade*/
  let mes = document.querySelector('#mes');
  let ano = document.querySelector('#ano');

  if (mes.value.length > 2) {/*usamos essa função parea puxar o valor, especificarmos que estamos mexendo com caracteres e limitamos ele por sybstring*/
    mes.value = mes.value.substring(0, 2)
  }
  if (ano.value.length > 2) {
    ano.value = ano.value.substring(0, 2)
  }
  return document.querySelector('#clonemes').value = document.querySelector('#mes').value + "/" + document.querySelector('#ano').value;
}


function validar() { /*função atrelada ao evento de click no botao validar cartão*/
  let cc2 = document.getElementById('cc');
  let resultado = document.getElementById('nome2');
  let mensagem = "";

  if (cc2.value == "") {/*condição para não permitir campo vazio no input de numero de cartão*/
    alert('É necessário preencher o campo do número de cartão')

  } else {

    if (validator.isValid(cc2.value)) { /*condição para mostrar se o cartao é valido ou nao, puxa o calculo do validator e a função is valid e atrelamos o valor o cc2.value */
      mensagem = "Válido";

    } else {
      mensagem = "Inválido";
    }
    resultado.textContent = mensagem;
  }

}

function link1() {/*linka as URLs abaixo ao clicar na foto*/
  window.location.href = "https://github.com/ThamaraBortolin"
}

function link2() {
  window.location.href = "https://www.linkedin.com/in/thamara-bortolin1999/"
}
