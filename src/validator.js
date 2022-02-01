let validator = (cc) => {
  let length = cc.length;
  let count = 0;

for(let i=0; i<length;i++) {
  let digito = parseInt(cc[i]);

if ((i+2) % 2 === 0)
  if((digito *=2) > 9)
      digito -= 9;

  count += digito;
}
return (count % 10) === 0;
}



export default validator;


