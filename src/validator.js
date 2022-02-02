let validator = (cc) => { /*codigo de luhn*/
  let length = cc.length;
  let count = 0;

for(let i=0; i<length;i++) { /* loop para index */
  let digito = parseInt(cc[i]);

if ((i) % 2 === 0) /*isolar index de posições pares*/
  if((digito *=2) > 9)/*condição para multiplicação com numeros decimais*/
      digito -= 9;

  count += digito;
}
return (count % 10) === 0;/*modulo da equação para saber se é valido ou seja, um decimal*/
}



export default validator;


