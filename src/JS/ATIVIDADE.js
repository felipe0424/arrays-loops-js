/* 
Questão 1: Verificação de Dia da Semana Crie um programa que solicite ao usuário um número de 1 a 7 e, usando um switch, determine e exiba qual dia da semana corresponde ao número inserido.
*/ 

let dia = parseInt(prompt('Digite o dia da semana (1-7)!'));

let nome;
switch (dia) {
  case 1:
    nome = 'Segunda-Feira';
    break;
  case 2:
    nome = 'Terça-Feira';
    break;
  case 3:
    nome = 'Quarta-Feira';
    break;
  case 4:
    nome = 'Quinta-Feira';
    break;
  case 5:
    nome = 'Sexta-Feira';
    break;
  case 6:
    nome = 'Sábado';
    break;
  case 7:
    nome = 'Domingo';
    break;
  default:
    nome = 'Indefinido';
}

alert(nome);


/* 
Questão 2: Avaliação de Desempenho Imagine que você está desenvolvendo um sistema de avaliação de desempenho de funcionários. Crie um switch que receba como entrada uma pontuação de 1 a 5 e exiba uma mensagem de feedback 
com base na pontuação.
*/

let funcionario = parseInt(prompt('Digite o código do funcionário'));
// let avaliacao = parseInt(prompt('Digite a sua nota de avaliação entre 1 e 5!'));
let avaliacao;
switch (funcionario) {
  case 1:
    avaliacao = parseInt(prompt('Digite a sua nota de avaliação entre 1 e 5!'));
    break;
  case 2:
    avaliacao = parseInt(prompt('Digite a sua nota de avaliação entre 1 e 5!'));
    break
  default:
    avaliacao = 'Código Inválido';
}

alert(`A avaliação do funcionário código ${funcionario} é igual a ${avaliacao}`);


/* 
Questão 3: Seleção de Produto 
Desenvolva um programa que simule a seleção de um produto em um menu de uma loja. Utilize um switch para permitir que o usuário selecione um produto digitando um código (por exemplo, 1 para "Camiseta", 2 para "Calça", 3 para "Boné") e exiba o produto escolhido no console.
*/

let selecione = parseInt(prompt('Digite o código do produto escolhido:'))
let produtos;
switch (selecione) {
  case 1: 
    produtos = '1. Camiseta';
    break
  case 2:
    produtos = '2. Calça';
    break
  case 3:
    produtos = '3. Boné';
    break;
  default:
    produtos = 'Código inválido'
}

alert(produtos);
