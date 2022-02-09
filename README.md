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

![Prototipo](src\img\prototipo.jpg)

Abaixo está o site onde podemos ver os locais para colocar os dados e o botão de validar.

![Site1](src\img\site1.png)

A seguir um exemplo onde o cartão aparece como válido e inválido respectivamente.

![Site2](src\img\site2.png)

![Site3](src\img\site3.png)