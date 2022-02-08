let validator = {
  isValid(cc) {  /*codigo de luhn*/
    let count = 0;/*melhor retorno no final do algoritmo*/
    let ccarray = [];

    for (let i = 0; i < cc.length; i++) {
      let digito = parseInt(cc[i]);/*transofrmar em numero inteiro*/
      ccarray.push(digito)/*puxar valor do input para array*/
    }
    let invcc = ccarray.reverse();/*inverte o index*/
    let algoritmo = invcc.length

    console.log(invcc);

    for (let i = 0; i < algoritmo; i++) {
      let luhn = parseInt(invcc[i]);

      if ((i + 1) % 2 == 0)/*inicio do algoritmo o +1 é por conta do index começar com 0*/
        if ((luhn *= 2) > 9)
          luhn -= 9;

      count += luhn;
    }
    if ((count % 10) == 0) {/*modulo de 10 para saber se é valido*/
      console.log(count)
      return true
    } else {
      console.log(count)
      return false
    }
  },
  maskify(cc) {

    let maskarray = Array.from(cc)/*criação do array para mexer de forma unitaria*/

    for (let i = 0; i < maskarray.length - 4; i++) {/*isolar casos, todos os index menos os ultimos 4 */
        maskarray[i] = ("#")/*index especificados ira virar "#"*/
      } 
      
      return maskarray.join("")/*irá juntar as condições acima*/
    
  }
}
export default validator;
