typeof "Alice"; // Retorna "string"
//typeof "Alice" // Retorna "string" pois tipo de dados é string, pois foi passado entre aspas

typeof 42.0; // Retorna "number"
//typeof 42.0 // Retorna "number" pois tipo de dados é number, pois foi passado um numero

typeof true; // Retorna "boolean"
//typeof true // Retorna "boolean" pois tipo de dados é boolean, pois foi passado um valor booleano

typeof [1, 2, 3]; // Retorna "object"
//typeof [1, 2, 3] // Retorna "object" pois tipo de dados é array, que e um tipo de objeto

typeof { name: "Alice", ano: 2020 }; // Retorna "object"
//typeof { name: "Alice", ano; 2020 } // Retorna "object" pois tipo de dados e um objeto, pois foi passado um objeto com chave e valor

typeof new Date("2020-01-01"); // Retorna "object"
//typeof new Date('2020-01-01') // Retorna "object" pois tipo de dados e um objeto Date, que e um tipo de objeto

typeof function () {}; // Retorna "function"
//typeof function () { } // Retorna "function" pois tipo de dados e uma fun o, pois foi passado uma fun o

typeof myBike; // Retorna "undefined"
//typeof myBike // Retorna "undefined" pois a variavel n o foi declarada

typeof null; // Retorna "object"
//typeof null // Retorna "object" pois tipo de dados e um objeto null, que e um tipo de objeto
