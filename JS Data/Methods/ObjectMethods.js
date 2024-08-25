// Objeto de exemplo para demonstrar os métodos do objeto
const obj = { a: 1, b: 2, c: 3 };

object.keys(obj);               //["a", "b", "c"}
//object.keys(obj) => retorna um array com todas as chaves do objeto

object.values(obj);             //[1, 2, 3]
//object.values(obj) => retorna um array com todos os valores do objeto


object.entries(obj);            //[['a', 1], ['b', 2], ['c', 3]]	// Retorna o valor de cada chave
//object.entries(obj) => retorna um array com todos os chave/valor do objeto

object.assign({}, obj);         //{ a: 1, b: 2, c: 3 }
//object.assign({}, obj) => cria um novo objeto com todas as propriedades do obj

object.freeze(obj);             // Prevenindo que o objeto seja alterado
//object.freeze(obj) => torna o objeto imutável, ou seja, nenhuma propriedade pode ser adicionada, removida ou 

//Previnindo adicionar ou remover propriedades, mas permite alterar o valor de propriedades
object.seal(obj);
//object.seal(obj) => torna o objeto selado, ou seja, nenhuma propriedade pode ser adicionada ou removida, mas os valores podem ser alterados

object.create(obj);                     // Cria um novo objeto com obj como protótipo
//object.create(obj) => cria um novo objeto com obj como protótipo

object.create(obj);                     // verdadeiro se objecto estiver congelado
//object.create(obj) => verifica se o objeto esta congelado

object.isSealed(obj);                   // verdadeiro se objecto estiver selado
//object.isSealed(obj) => verifica se o objeto esta selado

object.hasOwnProperty("a");             // true
//object.hasOwnProperty("a") => verifica se o objeto tem a propriedade "a"

object.getOwnPropertyNames(obj);        // ["a", "b", "c"]
//object.getOwnPropertyNames(obj) => retorna um array com todas as propriedades do objeto

object.getPrototypeOf(obj);             // Retorna o protótipo de obj
//object.getPrototypeOf(obj) => retorna o protótipo do objeto

object.setPrototypeOf(obj, newProto);   // seta o protótipo de obj
//object.setPrototypeOf(obj, newProto) => seta o protótipo do objeto

// Adiciona uma nova propriedade d com valor de 4
object.defineProperty(obj, "d", { value: 4 });
//object.defineProperty(obj, "d", { value: 4 }) => adiciona uma nova propriedade "d" com valor 4

// Adiciona uma nova propriedade e and f
object.defineProperties(obj, { e: { value: 5 }, f: { value: 6 } });
//object.defineProperties(obj, { e: { value: 5 }, f: { value: 6 } }) => adiciona novas propriedades "e" e "f" com valores 5 e 6

object.isExtensible(obj)                               // true se as propriedades podem ser adicionadas
//object.isExtensible(obj) => verifica se as propriedades podem ser adicionadas

object.preventExtensions(obj)                          // Impede que as propriedades sejam adicionadas
//object.preventExtensions(obj) => impede que as propriedades sejam adicionadas

object.fromEntries([["a", 1], ["b", 2], ["c", 3]]);    // Converte key-value pairs em um objeto
//object.fromEntries([["a", 1], ["b", 2], ["c", 3]]) => converte key-value pairs em um objeto

Object.getOwnPropertyDescriptor(obj, 'a');
// Object.getOwnPropertyDescriptor(obj, 'a') - Retorna o descritor de propriedade para uma propriedade específica do objeto.

Object.getOwnPropertyDescriptors(obj); 
// Object.getOwnPropertyDescriptors(obj) - Retorna um objeto contendo todos os descritores de propriedade do objeto.

Object.fromEntries(new Map([['a', 1], ['b', 2]]));  
// Object.fromEntries(new Map([['a', 1], ['b', 2]])) - Converte um iterável de pares chave-valor em um objeto. No caso, retorna { a: 1, b: 2 }.

Object.isFrozen(obj);                     // false
// Object.isFrozen(obj) - Verifica se o objeto está congelado. No caso, retorna false.

Object.isExtensible(obj);                 // true
// Object.isExtensible(obj) - Verifica se é possível adicionar novas propriedades ao objeto. No caso, retorna true.

Object.isSealed(obj);                     // false
// Object.isSealed(obj) - Verifica se o objeto está selado. No caso, retorna false.

Object.preventExtensions(obj);            
// Object.preventExtensions(obj) - Impede a adição de novas propriedades ao objeto.

Object.setPrototypeOf(obj, { d: 4 });     
// Object.setPrototypeOf(obj, { d: 4 }) - Define o protótipo (ou [[Prototype]]) do objeto especificado para outro objeto ou null.

Object.is(obj.a, 1);                      // true
// Object.is(obj.a, 1) - Verifica se dois valores são o mesmo valor. No caso, retorna true.

Object.values(obj);                       // [1, 2, 3]
// Object.values(obj) - Retorna um array com os valores das propriedades enumeráveis de um objeto. No caso, retorna [1, 2, 3].
