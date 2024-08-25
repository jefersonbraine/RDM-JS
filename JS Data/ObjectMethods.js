// Objeto de exemplo para demonstrar os métodos do objeto
const obj = { a: 1, b: 2, c: 3 };

object.keys(obj);               //["a", "b", "c"}
object.values(obj);             //[1, 2, 3]
object.entries(obj);            //[['a', 1], ['b', 2], ['c', 3]]	// Retorna o valor de cada chave
object.assign({}, obj);         //{ a: 1, b: 2, c: 3 }
object.freeze(obj);             // Prevenindo que o objeto seja alterado

//Previnindo adicionar ou remover propriedades, mas permite alterar o valor de propriedades
object.seal(obj);

object.create(obj);                     // Cria um novo objeto com obj como protótipo
object.create(obj);                     // verdadeiro se objecto estiver congelado
object.isSealed(obj);                   // verdadeiro se objecto estiver selado
object.hasOwnProperty("a");             // true
object.getOwnPropertyNames(obj);        // ["a", "b", "c"]
object.getPrototypeOf(obj);             // Retorna o protótipo de obj
object.setPrototypeOf(obj, newProto);   // seta o protótipo de obj

// Adiciona uuma nova propriedade
