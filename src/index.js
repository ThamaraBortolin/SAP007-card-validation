import validator from './validator.js';

<<<<<<< HEAD
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

const chamar = () => {
    const cc2 = document.getElementById('cc');
    let alert = window.alert("")

    if (Algoritmo(cc2.value))
        alert = "Valido"
    else
        alert = "Invalido"
    
        cc2.textContent = alert;
};






=======
>>>>>>> 9a383d95daa921ed389642491126763cb964325a
console.log(validator);
