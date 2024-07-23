### 1. `push()`
Adiciona um ou mais elementos ao final do array e retorna o novo comprimento do array.
```js
let frutas = ["Maçã", "Banana"];
frutas.push("Laranja");
console.log(frutas); // ["Maçã", "Banana", "Laranja"]
```

### 2. `pop()`
Remove o último elemento do array e o retorna.
```js
let ultimo = frutas.pop();
console.log(frutas); // ["Maçã", "Banana"]
```

### 3. `shift()`
```js
let primeiro = frutas.shift();
console.log(primeiro); // "Maçã"
console.log(frutas); // ["Banana"]
```

### 4. `unshift()`
Adiciona um ou mais elementos ao início do array e retorna o novo comprimento do array.
```js
frutas.unshift("Morango");
console.log(frutas); // ["Morango", "Banana"]
```

### 5. `concat()`
Junta dois ou mais arrays e retorna um novo array.
```js
let legumes = ["Cenoura", "Batata"];
let alimentos = frutas.concat(legumes);
console.log(alimentos); // ["Morango", "Banana", "Cenoura", "Batata"]
```

### 6. `join()`
Junta todos os elementos do array em uma string, separados por um delimitador especificado.
```js
let stringFrutas = frutas.join(", ");
console.log(stringFrutas); // "Morango, Banana"
```

### 7. `slice()`
Retorna uma cópia superficial de uma parte do array, selecionada desde o início até o fim (não incluindo o fim), onde início e fim representam o índice de itens no array.
```js
let algumasFrutas = frutas.slice(0, 1);
console.log(algumasFrutas); // ["Morango"]
```

### 8. `splice()`
Altera o conteúdo de um array, adicionando novos elementos enquanto remove elementos antigos.
```js
frutas.splice(1, 0, "Uva");
console.log(frutas); // ["Morango", "Uva", "Banana"]
```

### 9. `indexOf()`
Retorna o primeiro índice em que um determinado elemento pode ser encontrado no array, ou -1 se o elemento não estiver presente.
```js
let indiceBanana = frutas.indexOf("Banana");
console.log(indiceBanana); // 2
```

### 10. `lastIndexOf()`
Retorna o último índice em que um determinado elemento pode ser encontrado no array, ou -1 se o elemento não estiver presente.
```js
frutas.push("Morango");
let ultimoIndiceMorango = frutas.lastIndexOf("Morango");
console.log(ultimoIndiceMorango); // 3
```

### 11. `forEach()`
Executa uma função fornecida uma vez para cada elemento do array.
```js
frutas.forEach(fruta => {
  console.log(fruta);
});
// "Morango"
// "Uva"
// "Banana"
// "Morango"
```

### 12. `map()`
Cria um novo array com os resultados da chamada de uma função fornecida aplicada a cada elemento do array.
```js
let frutasMaiusculas = frutas.map(fruta => fruta.toUpperCase());
console.log(frutasMaiusculas); // ["MORANGO", "UVA", "BANANA", "MORANGO"]
```

### 13. `filter()`
Cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
```js
let frutasComA = frutas.filter(fruta => fruta.includes("a"));
console.log(frutasComA); // ["Banana"]
```

### 14. `reduce()`
Aplica uma função contra um acumulador e cada elemento do array (da esquerda para a direita) para reduzi-lo a um único valor.
```js
let numeros = [1, 2, 3, 4];
let soma = numeros.reduce((total, num) => total + num, 0);
console.log(soma); // 10
```

### 15. `reduceRight()`
Aplica uma função contra um acumulador e cada elemento do array (da direita para a esquerda) para reduzi-lo a um único valor.
```js
let somaReversa = numeros.reduceRight((total, num) => total + num, 0);
console.log(somaReversa); // 10
```

### 16. `some()`
Testa se pelo menos um elemento no array passa no teste implementado pela função fornecida.
```js
let temBanana = frutas.some(fruta => fruta === "Banana");
console.log(temBanana); // true
```

### 17. `every()`
Testa se todos os elementos no array passam no teste implementado pela função fornecida.
```js
let todasComA = frutas.every(fruta => fruta.

includes("a"));
console.log(todasComA); // false
```

### 18. `find()`
Retorna o valor do primeiro elemento no array que satisfizer a função de teste fornecida. Caso contrário, undefined é retornado.
```js
let encontraUva = frutas.find(fruta => fruta === "Uva");
console.log(encontraUva); // "Uva"
```

### 19. `findIndex()`
Retorna o índice do primeiro elemento no array que satisfizer a função de teste fornecida. Caso contrário, -1 é retornado.
```js
let indiceUva = frutas.findIndex(fruta => fruta === "Uva");
console.log(indiceUva); // 1
```

### 20. `includes()`
Determina se um array contém um determinado elemento, retornando true ou false conforme apropriado.
```js
let incluiBanana = frutas.includes("Banana");
console.log(incluiBanana); // true
```

### 21. `sort()`
Ordena os elementos do array e retorna o array.
```js
frutas.sort();
console.log(frutas); // ["Banana", "Morango", "Morango", "Uva"]
```

### 22. `reverse()`
Inverte a ordem dos elementos do array no local e retorna o array.
```js
frutas.reverse();
console.log(frutas); // ["Uva", "Morango", "Morango", "Banana"]
```