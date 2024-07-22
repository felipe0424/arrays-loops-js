/* 
Questão 1: Verificação de Dia da Semana 
Crie um programa que solicite ao usuário um número de 1 a 7 e, usando um switch, determine e exiba qual dia da semana corresponde ao número inserido.
*/

var a = 1;
let dia = 1;
let nome;

switch (dia) {
  case 1:
    nome = 'Segunda-feira';
    break;
  case 2:
    nome = 'Terça-feira';
    break;
  case 3:
    nome = 'Quarta-feira';
    break;
  case 4:
    nome = 'Quinta-feira';
    break;
  case 5:
    nome = 'Sexta-feira';
    break;
  case 6:
    nome = 'Sábado';
    break;
  case 7:
    nome = 'Domingo';
    break;
  default:
    nome = 'Inválido'
}

console.log(nome);

/* 
Questão 2: Avaliação de Desempenho 
Imagine que você está desenvolvendo um sistema de avaliação de desempenho de funcionários. Crie um switch que receba como entrada uma pontuação de 1 a 5 e exiba uma mensagem de feedback 
com base na pontuação.
*/

/* 
Questão 3: Seleção de Produto 
Desenvolva um programa que simule a seleção de um produto em um menu de uma loja. Utilize um switch para permitir que o usuário selecione um produto digitando um código (por exemplo, 1 para "Camiseta", 2 para "Calça", 3 para "Boné") e exiba o produto escolhido no console.
*/
