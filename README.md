<div align="center">
<a href="https://felipe0424.github.io/PortfolioDev/HTML/index.html"><img src="https://github.com/user-attachments/assets/3804386a-094d-42de-8a5d-f4dfb033ffba" alt="js" width="70"></a>

# **JavaScript**
### `Arrays e Loops`
</div>

## :bookmark_tabs:	Índice
* [1. O que é um Loop](#1-o-que-é-um-loop)
* [2. For](#2-for)
* [3. For...in](#3-forin)
* [4. For...of](#4-forof)
* [5. While](#5-while)
* [6. Switch](#6-switch)

## :computer:	Ferramentas e linguagens utilizadas no desenvolvimento
<div align="auto">
    <a href="https://felipe0424.github.io/PortfolioDev/HTML/index.html"><img src="https://github.com/user-attachments/assets/3804386a-094d-42de-8a5d-f4dfb033ffba" alt="js" width="50"></a>
    <a href="https://felipe0424.github.io/PortfolioDev/HTML/index.html"><img src="https://github.com/user-attachments/assets/64486d67-8973-4b62-bdfc-212cf9f16709" alt="md" width="50"></a>
    <a href="https://felipe0424.github.io/PortfolioDev/HTML/index.html"><img src="https://github.com/user-attachments/assets/d3813ef4-1409-40c9-9bfb-6e988f79b2c8" alt="Git" width="50"></a>
    <a href="https://felipe0424.github.io/PortfolioDev/HTML/index.html"><img src="https://github.com/user-attachments/assets/b03adba8-e155-4555-8737-2afaf449620d" alt="Node" width="50"></a>
</div>

## :books:	Conteúdo

## 1. O que é um Loop?
Estrutura de controle em JavaScript usada para criar loops, ou seja, para repetir um bloco de código várias vezes.

## 2. For
**Inicialização:** Executada uma vez no início do loop. Geralmente é usada para declarar e inicializar a variável de controle do loop.

**Condição:** Avaliada antes de cada iteração do loop. Se for verdadeira, o bloco de código dentro do loop será executado. Se for falsa, o loop termina.

**Incremento:** Executado após cada iteração do loop. Geralmente é usado para atualizar a variável de controle.

```rust
for (inicialização; condição; incremento++) {
  // código a ser executado
}
```

```rust
const produtos = ['lapis', 'bolsa', 'regua', 'borracha'];
for (materiais = 0; materiais < produtos.length; materiais++) {
    console.log(`Material ${materiais + 1}: ${produtos[materiais]}`)
}
```

## 3. For...In
O loop for...in é usado para iterar sobre as propriedades enumeráveis de um objeto. Ele percorre as chaves (ou índices) do objeto.

```rust
const frutas = ['maçã', 'banana', 'laranja'];

for (let lista in frutas) { // Define as Frutas IN fruta
  console.log(frutas[lista]); // Imprime as frutas que estão IN fruta
}
```

## 4. For...Of
É usado para iterar sobre objetos iteráveis (como arrays, strings, Map, Set e outros iteráveis). Ele percorre os valores dos elementos da coleção.

```rust
const frutas = ['maçã', 'banana', 'laranja'];
for (let lista of frutas) { // Define as fruta DAS frutas
  console.log(lista); // Imprime a fruta que contem as frutas
}
```

## 5. While
A condição é avaliada antes de cada iteração do loop. Se a condição for verdadeira, o bloco de código dentro do while é executado.

```rust
const hora = 1;
while(hora < 24) {
    console.log(hora);
    hora++
}

console.log("Total de horas " + hora);
```

## 6. Switch
Permite executar diferentes blocos de código com base no valor de uma expressão. É uma alternativa ao uso de múltiplos if...else if...else.

```rust
let diaSemana = 3;
let nomeDia;

switch (diaSemana) {
  case 1:
    nomeDia = 'Domingo';
    break;
  case 2:
    nomeDia = 'Segunda-feira';
    break;
  case 3:
    nomeDia = 'Terça-feira';
    break;
  case 4:
    nomeDia = 'Quarta-feira';
    break;
  case 5:
    nomeDia = 'Quinta-feira';
    break;
  case 6:
    nomeDia = 'Sexta-feira';
    break;
  case 7:
    nomeDia = 'Sábado';
    break;
  default:
    nomeDia = 'Dia inválido';
}

console.log(`Hoje é ${nomeDia}`);
```

## :telephone_receiver:	Contato
Para saber mais sobre meus trabalhos, entre em contato comigo através do <a href="https://www.linkedin.com/in/jfeliperamos/">LinkedIn</a> ou visite meu <a href="https://felipe0424.github.io/PortfolioDev/HTML/index.html">GitHub.</a> 

<div align=center>
    <a href="https://www.linkedin.com/in/jfeliperamos/">
        <img src="https://github.com/user-attachments/assets/0350e54a-100e-4273-aa51-81aa9fce3d79" alt="LinkedIn" width="25">
    </a> 
    <a href="https://felipe0424.github.io/PortfolioDev/HTML/index.html">
        <img src="https://github.com/user-attachments/assets/3fda6271-fd40-4485-bb7c-60b927b9feae" alt="GitHub" width="25">
    </a>
</div>

> [!WARNING]
> Este código é disponibilizado exclusivamente para fins de estudo e aprendizado. A reprodução total ou parcial deste código, sem autorização prévia, é expressamente proibida. A utilização deste código em projetos comerciais, distribuição não autorizada ou qualquer outro uso que não seja educativo pode resultar em sanções legais. Ao utilizar este código, você concorda em respeitar os termos de uso e a propriedade intelectual do autor.