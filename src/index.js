import validator from './validator.js';

let cc = document.getElementById('cc').value;

const Algoritmo = (cc) => {
    const lenght = cc.lenght;
    let count = 0;


for(let i = 0; i < lenght; i++) {
    let digito = parseInt(cc[i]);

    if ((i+2) % 2 == 0)
        if((digito *= 2 ) > 9)
            digito -= 9;

    count += digito;
}
return (count % 10) === 0;
}

const click = () => {
    const cc2 = document.getElementById('cc');
    const resultado = document.getElementById('nome2');
    let mensagem = "";

if (Algoritmo(cc2.value))
        mensagem = "Valido";
    else
        mensagem = "Invalido";
    
        resultado.textContent = mensagem;
    

    
}

    
console.log(validator);
