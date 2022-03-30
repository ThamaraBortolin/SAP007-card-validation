# Validador de Cartão de Crédito 


## 1. Introdução

O [algoritmo de Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm), também
chamado de módulo 10, é um método de soma de verificação, usado para validar
números de identificação, como o IMEI de telefones celulares, cartões de crédito
etc.

Esse algoritmo é simples. Obtemos o inverso do número a ser verificado (que
contém apenas dígitos [0-9]); todos os números que ocupam uma posição par devem
ser multiplicados por dois; se esse número for maior ou igual a 10, devemos
adicionar os dígitos do resultado; o número a verificar será válido se a soma de
seus dígitos finais for um múltiplo de 10.

![gráfico do algoritmo de
Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)

## 2. Resumo do projeto

Neste projeto, foi desenvolvido um site modelo de loja de compras de roupas e 
acessórios, o objetivo é ter uma interface clean e intuitiva, com uma funcionalidade
simples mas eficaz, o usuário deve inserir os dados que estão presentes em seu cartão 
(nome, número do cartão e sua validade), e por meio de um click do botão o cartão
será validado e mostrará sua resposta de válido ou inválido.

A idéia surgiu a partir de situações em nosso cotidiano, em que a validação
seria utilizada dentro de um site e que poderia abranger o público em geral.

## 3. Protótipo e site

A pagina esteticamente foi construida visando o conforto do usuário em sua utilização.
A logo, as categorias de produtos na barra lateral, os inputs e o cartão interativo
foram implementados com base em sites de compras que utilizam do validador de cartão.

Abaixo está o protótipo desenhado do site (sua idéia inicial), e logo em seguida
o site finalizado e como funciona sua validação.

![Prototipo](https://scontent.fcpq7-1.fna.fbcdn.net/v/t39.30808-6/273698097_2696168320529479_4130432194105451955_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeG2ThV2oTeAnF6yfANIoXuk9iCHJmf8w9b2IIcmZ_zD1tzKJd0wYDtdBDiZXYnKd8nf10VAuXQmrjniRtpc0jz9&_nc_ohc=hKUXTO7WepMAX8HQPbr&_nc_ht=scontent.fcpq7-1.fna&oh=00_AT8whYzuB9kPphV_-Wa6n7gv0WN3JfhUGz4LEPUz1QTYbA&oe=62098C5D)

Abaixo está o site onde podemos ver os locais para colocar os dados e o botão de validar.

![Site1](https://scontent.fcpq7-1.fna.fbcdn.net/v/t39.30808-6/273728664_2696167390529572_7483871660209667724_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeEzjIhlt8unNXGibEhY-NK4VVOv-wbl2rNVU6_7BuXas1wwwVbWeG4o_bj-GRIruKuP88gNORjGOtpcowSb4VEa&_nc_ohc=EMyVflfORPUAX-iuGtT&tn=Z-_nUoxcaL5NOknl&_nc_ht=scontent.fcpq7-1.fna&oh=00_AT8yn7WTTx1y83QYTpScrJ5ZbACsi54cW4apyPN2eTD7RQ&oe=6209C559)

A seguir um exemplo onde o cartão aparece como válido e inválido respectivamente.

![Site2](https://scontent.fcpq7-1.fna.fbcdn.net/v/t39.30808-6/273638598_2696167367196241_3304357877238561877_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeENRSPMIUmUlBHkYZORc8dbuNOuFTuLrPC4064VO4us8PtOvqVgzscMPNL9OlfZrAiEz7_3XIe5WXpfBCbVWoA6&_nc_ohc=n-BbS-LXag4AX9Zk9VA&tn=Z-_nUoxcaL5NOknl&_nc_ht=scontent.fcpq7-1.fna&oh=00_AT8F6ygSvkkD4WcOlEwN4tZJFwA1LE7jZx2ie4YtR2eydw&oe=62096AC0)

![Site3](https://scontent.fcpq7-1.fna.fbcdn.net/v/t39.30808-6/273742267_2696167377196240_1764565853512413850_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeENxOAEGdcmUZK-e9OjkkeQN4TkFgqLG4c3hOQWCosbh4qBiRsvFNUo7rNc0M7wBgg9LcRtwdB22eXBE_8OwOah&_nc_ohc=qArYNyIUue8AX-xgpSJ&_nc_ht=scontent.fcpq7-1.fna&oh=00_AT9vstlZyToqdZadI8eUqeVzzjo8v3Nqp6d7gAyv5spZxA&oe=620827A0)

