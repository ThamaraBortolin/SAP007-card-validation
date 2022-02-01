import validator from './validator.js';

let cc = document.getElementById('cc').value;
let botao = document.getElementById('botao');
botao.addEventListener("click",validar);

function validar () {
  let cc1 = document.getElementById('cc').value.length;
  let cc2 = document.getElementById('cc');
  let resultado = document.getElementById('nome2');
  let mensagem = "";

  if(cc1 < 13) {
    alert ('O número do cartão possui no mínimo 13 dígitos.')
  
  }else{

  if (validator(cc2.value))
    mensagem = "Valido";
  else
    mensagem = "Invalido";
  
    resultado.textContent = mensagem;
  }
}




    
  



console.log(validator);









    
 










