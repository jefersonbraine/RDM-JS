// 1. `object.assign()`- MESCLANDO OBJETOS
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

// Object.assign() - Copia as propriedades de um ou mais objetos para um objeto alvo.
const result = Object.assign(target, source);

console.log(result); // { a: 1, b: 4, c: 5 }

//////////////////////////////////////////////////////

// 2. `object.keys()`= OBTENDO AS CHAVES DE UM OBJETO
const obj = { a: 1, b: 2, c: 3 };

// Object.keys() - Retorna um array com as chaves (propriedades) do objeto.
const keys = Object.keys(obj);

console.log(keys); // ["a", "b", "c"]

//////////////////////////////////////////////////////

// 3. `object.values()`= OBTENDO OS VALORES DE UM OBJETO
const obj = { a: 1, b: 2, c: 3 };

// Object.values() - Retorna um array com os valores das propriedades do objeto.
const values = Object.values(obj);

console.log(values); // [1, 2, 3]

//////////////////////////////////////////////////////

// 4. `object.entries()`= OBTENDO PARES DE [CHAVES, VALOR]
const obj = { a: 1, b: 2, c: 3 };

// Object.entries() - Retorna um array de arrays, onde cada subarray contém um par [chave, valor].
const entries = Object.entries(obj);

console.log(entries); // [["a", 1], ["b", 2], ["c", 3]]

//////////////////////////////////////////////////////

// 5. `object.fromEntries()`- CRIANDO UM OBJETO A PARTIR DE PARES DE [CHAVE, VALOR]
const entries = [["a", 1], ["b", 2], ["c", 3]];

// Object.fromEntries() - Converte um array de pares [chave, valor] em um objeto.
const obj = Object.fromEntries(entries);

console.log(obj); // { a: 1, b: 2, c: 3 }

//////////////////////////////////////////////////////

// 6. `object.freeze()`- CONGELANDO UM OBJETO
const obj = { a: 1, b: 2 };

// Object.freeze() - Congela um objeto, impedindo que suas propriedades sejam alteradas ou adicionadas.
Object.freeze(obj);

obj.a = 10; // Não tem efeito, pois o objeto está congelado
console.log(obj.a); // 1

//////////////////////////////////////////////////////

// 7. `object.seal()`- SELANDO UM OBJETO
const obj = { a: 1, b: 2 };

// Object.seal() - Sela um objeto, permitindo a modificação de propriedades existentes, mas impedindo a adição ou remoção de propriedades.
Object.seal(obj);

obj.a = 10;  // Pode ser modificado
delete obj.b; // Não tem efeito, pois o objeto está selado

console.log(obj); // { a: 10, b: 2 }

//////////////////////////////////////////////////////

// 8. `object.isFrozen()`- VERIFICANDO SE UM OBJETO ESTÁ CONGELADO
const obj = { a: 1 };
Object.freeze(obj);

// Object.isFrozen() - Retorna true se o objeto estiver congelado.
console.log(Object.isFrozen(obj)); // true

////////////////////////////////////////////////////

// 9. `object.isSealed()`- VERIFICANDO SE UM OBJETO ESTÁ SELADO
const obj = { a: 1 };
Object.seal(obj);

// Object.isSealed() - Retorna true se o objeto estiver selado.
console.log(Object.isSealed(obj)); // true

////////////////////////////////////////////////////

// 10. `object.getOwnPropertyDescriptors()`- OBTENDO DESCRIPTORES DE PROPRIEDADES
const obj = { a: 1 };

// Object.getOwnPropertyDescriptors() - Retorna todos os descritores de propriedades de um objeto.
const descriptors = Object.getOwnPropertyDescriptors(obj);

console.log(descriptors);
// {
//   a: {
//     value: 1,
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
// }

////////////////////////////////////////////////////

// 11. `object.defineProperty()`- DEFININDO UMA PROPRIEDADE DOM DESCRITOR
const obj = {};

// Object.defineProperty() - Define uma nova propriedade diretamente em um objeto, ou modifica uma propriedade existente, com um descritor.
Object.defineProperty(obj, 'a', {
  value: 10,
  writable: false,   // Não pode ser modificado
  enumerable: true,  // Aparece em loops e Object.keys()
  configurable: false // Não pode ser redefinido ou deletado
});

console.log(obj.a); // 10
obj.a = 20;         // Não tem efeito, pois writable é false
console.log(obj.a); // 10

////////////////////////////////////////////////////

// 12. `object.defineProperties()`- DEFININDO MÚLTIPLAS PROPRIEDADES
const obj = {};

// Object.defineProperties() - Define múltiplas propriedades em um objeto de uma vez, com descritores.
Object.defineProperties(obj, {
  'a': {
    value: 1,
    writable: true
  },
  'b': {
    value: 2,
    writable: false
  }
});

console.log(obj); // { a: 1, b: 2 }

////////////////////////////////////////////////////

// 13. `object.getPrototypeOf()`- OBTENDO  PROTÓTIPO DE UM OBJETO	
const obj = {};

// Object.getPrototypeOf() - Retorna o protótipo (prototype) do objeto especificado.
const proto = Object.getPrototypeOf(obj);

console.log(proto); // {}

////////////////////////////////////////////////////

// 14. `object.setPrototypeOf()`- DEFININDO O PROTÓTIPO DE UM OBJETO
const obj = {};
const proto = { sayHello() { return 'Hello'; } };

// Object.setPrototypeOf() - Define o protótipo de um objeto.
Object.setPrototypeOf(obj, proto);

console.log(obj.sayHello()); // "Hello"

////////////////////////////////////////////////////

// 15. `object.create()` - CRIANDO UM OBJETO COM PROTÓTIPO ESPECÍFICO
const proto = { sayHello() { return 'Hello'; } };

// Object.create() - Cria um novo objeto com o protótipo especificado.
const obj = Object.create(proto);

console.log(obj.sayHello()); // "Hello"

////////////////////////////////////////////////////

// 16. `object.hasOwnProperty()` - VERIFICANDO PROPRIEDADES DO PRÓPRIO OBJETO
const obj = { a: 1 };

// Object.hasOwnProperty() - Verifica se o objeto tem a propriedade especificada como uma propriedade direta (não herdada).
console.log(obj.hasOwnProperty('a')); // true
console.log(obj.hasOwnProperty('b')); // false

////////////////////////////////////////////////////

// 17. `object.is()`- COMPARANDO DOIS VALORES
// Object.is() - Compara dois valores para determinar se são o mesmo valor.
console.log(Object.is(25, 25)); // true
console.log(Object.is('foo', 'foo')); // true
console.log(Object.is({}, {})); // false (objetos diferentes)
