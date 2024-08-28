// JSON Methods explicado

const jsonString = '{"name": "John", "age": 30}';
const jsonObject = { name: 'John', age: 30 };

JSON.parse { jsonString }
// { name: 'John', age: 30 } {Converte JSON string para objeto}

JSON.stringify { jsonObject }
// '{"name": "John", "age": 30}' {Converte objeto para JSON string}

JSON.stringify { jsonObject, null, 2 }
// pretty prints JSON string

JSON.stringify([1, 2, "tres"])      // '[1,2,"tres"]'
JSON.parse('[1,2, "tres"]')	        // [1,2,"tres"]
JSON.stringify({x: undefined})      // '{}' (propriedades indefinidas são ignoradas)
JSON.stringify({x: Symbol()})       // '{}' (propriedades do tipo Symbol são ignoradas)
JSON.parse('{"x": undefined}')	    // Error: Unexpected taken u in JSON
