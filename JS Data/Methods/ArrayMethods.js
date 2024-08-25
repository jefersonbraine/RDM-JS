
//Array de exemplo para demonstrar methods do array
const arr = [1, 2, 3, 4, 5];

arr.push(6)                             // [1, 2, 3, 4, 5, 6]
// arr.push(6) - Adiciona um elemento ao final do array. O array agora tem 6 elementos.
 
arr.pop()                               // [1, 2, 3, 4, 5]
// arr.pop() - Remove o último elemento do array. O array agora tem 5 elementos.
 
arr.shift()                             // [2, 3, 4, 5]
// arr.shift() - Remove o primeiro elemento do array. O array agora tem 4 elementos.

arr.unshift(0)                          // [0, 2, 3, 4, 5]
// arr.unshift(0) - Adiciona um elemento no início do array. O array agora tem 5 elementos.
 
arr.concat([6, 7])                      // [0, 2, 3, 4, 5, 6, 7]
// arr.concat([6, 7]) - Concatena o array com outro array. O array agora tem 7 elementos.
 
arr.slice(1, 3)                         // [2, 3]
// arr.slice(1, 3) - Cria um novo array com os elementos que estão entre os indices 1 e 3. O array tem 2 elementos.
 
arr.splice(1, 2)                        // [0, 4, 5 ]
// arr.splice(1, 2) - Remove 2 elementos do array a partir do index 1. O array agora tem 3 elementos.

arr.reverse()                           // [5, 4, 0]
// arr.reverse() - Inverte a ordem dos elementos do array.

arr.sort()                              // [0, 4, 5]
// arr.sort() - Ordena o array em ordem crescente.

arr.indexOf(4)                          // 1
// arr.indexOf(4) - Retorna o index do elemento 4 no array. No caso, o index é 1.

arr.includes(3)                         // true
// arr.includes(3) - Verifica se o elemento 3 está no array. No caso, o resultado é true.

arr.find(x => x > 3)                    // 4
// arr.find(x => x > 3) - Retorna o primeiro elemento do array que satisfaça a condição. No caso, o elemento é 4.

arr.filter(x => x > 3)                  // [4, 5]
// arr.filter(x => x > 3) - Retorna um novo array com os elementos que satisfazem a condição. No caso, o array tem 2 elementos.

arr.map(x => x * 2)                     // [10, 8, 0]
// arr.map(x => x * 2) - Retorna um novo array com os elementos multiplicados por 2.

arr.reduce((sum, x) => sum + x, 0)      // 9
// arr.reduce((sum, x) => sum + x, 0) - Retorna a soma de todos os elementos do array. No caso, o resultado é 9.

arr.join('-')                           // '5-4-0'
// arr.join('-') - Retorna uma string com os elementos do array separados por um caractere. No caso, o resultado é '5-4-0'.
 
arr.every(x => x > 2)                   // false
// arr.every(x => x > 2) - Verifica se todos os elementos do array satisfazem a condição. No caso, o resultado é false.

arr.some(x => x > 4)                    // true
// arr.some(x => x > 4) - Verifica se algum elemento do array satisfaça a condição. No caso, o resultado é true.

arr.findIndex(x => x > 4)               // 0
// arr.findIndex(x => x > 4) - Retorna o index do primeiro elemento do array que satisfaça a condição. No caso, o index é 0.

arr.fill(9)                             // [9, 9, 9]
// arr.fill(9) - Substitui todos os elementos do array pelo valor 9.

arr.copyWithin(0, 1)                    // [9, 9, 9]
// arr.copyWithin(0, 1) - Substitui os elementos do array a partir do index 0 com os elementos do array a partir do index 1.

arr.flatMap(x => [x, x * 2])            // [18, 18, 18]
// arr.flatMap(x => [x, x * 2]) - Retorna um novo array com os elementos do array multiplicados por 2.

arr.entries()                           // Array Iterator com key/value pairs
// arr.entries() - Retorna um iterator com os pares key/value do array.

arr.keys()                              // Array Iterator com keys
// arr.keys() - Retorna um iterator com as chaves(key) do array.

arr.values()                            // Array Iterator com values
// arr.values() - Retorna um iterator com os valores(value) do array.

arr.findLast(x => x < 4);               // 3
// arr.findLast(x => x < 4) - Retorna o último elemento do array que satisfaz a condição. No caso, o resultado é 3.

arr.findLastIndex(x => x < 4);          // 2
// arr.findLastIndex(x => x < 4) - Retorna o índice do último elemento do array que satisfaz a condição. No caso, o resultado é 2.

arr.at(-1);                             // 5
// arr.at(-1) - Retorna o elemento na posição especificada. No caso, -1 retorna o último elemento, que é 5.

arr.flat();                             // [1, 2, 3, 4, 5]
// arr.flat() - Retorna um novo array com todos os sub-arrays concatenados em um único array. No caso, não há sub-arrays, então o resultado é igual ao array original.

arr.forEach(x => console.log(x));       // Logs: 1 2 3 4 5
// arr.forEach(x => console.log(x)) - Executa uma função para cada elemento do array.

arr.reduceRight((sum, x) => sum + x, 0); // 15
// arr.reduceRight((sum, x) => sum + x, 0) - Aplica uma função cumulativa aos elementos do array, da direita para a esquerda, retornando um único valor.

arr.toLocaleString();                    // '1,2,3,4,5'
// arr.toLocaleString() - Retorna uma string com os elementos do array, separados por vírgula, formatados conforme a localidade do sistema.

arr.toString();                          // '1,2,3,4,5'
// arr.toString() - Retorna uma string com os elementos do array, separados por vírgula.

Array.isArray(arr);                      // true
// Array.isArray(arr) - Verifica se a variável passada é um array. No caso, o resultado é true.

arr.copyWithin(0, 3, 5);                 // [4, 5, 3, 4, 5]
// arr.copyWithin(0, 3, 5) - Copia uma parte do array para outra posição dentro do mesmo array. No caso, copia os elementos de índices 3 a 5 para o início do array.
