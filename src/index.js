import validator from './validator.js';
let nome = document.querySelector("#nome");
let cc = document.querySelector("#cc");
let botao = document.getElementById('botao');
botao.addEventListener("click",validar);/*evento de click no botao para validar o cartao*/
nome.addEventListener("keyup", clonarnome);/*eventos de teclar para aparecer no cartao os dados do cliente enquanto ele digita*/
cc.addEventListener("keyup", clonarcc);

function clonarnome (){/*fuções para atribuir valor de um input para outro*/
  let originnome = document.querySelector("#nome").value;

  if (originnome != null){
    document.querySelector("#clonenome").value = document.querySelector("#nome").value.toUpperCase();
  }
}

function clonarcc (){
  let origincc = document.querySelector("#cc").value;
  
  if (origincc != null){
    document.querySelector("#clonecc").value = document.querySelector("#cc").value;
  }
}


function validar () { /*função atrelada ao evento de clicl*/
  let cc1 = document.getElementById('cc').value.length;
  let cc2 = document.getElementById('cc');
  let resultado = document.getElementById('nome2');
  let mensagem = "";
  
  if(cc1 < 13) { /*condição para ter no minimo 13 digitos no input*/
    alert ('O número do cartão possui no mínimo 13 dígitos.') 
  
  }else{

  if (validator(cc2.value)){ /*caso há mais que 13 digitos a condição é mostrar se o cartao é valido ou nao*/
    mensagem = "Válido";
    console.log('True')
  }else
    mensagem = "Inválido";
    console.log('False')
  
    resultado.textContent = mensagem;
  }
}

console.log(validator);