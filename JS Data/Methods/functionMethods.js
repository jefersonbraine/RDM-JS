// 1. call() - Invocando uma Função com um Valor de this Específico

function greet() {
    return `Hello, ${this.name}!`;
}

const person = { name: 'Jeferson' };

// call() - Invoca a função, definindo o valor de 'this' para o objeto especificado.
console.log(greet.call(person)); // "Hello, Jeferson!"

////////////////////////////////////////////////////////

// 2. apply() - Invocando uma Função com um Valor de this Específico e Argumentos como Array

function sum(a, b) {
    return a + b;
}

// apply() - Semelhante ao call(), mas os argumentos são passados como um array.
console.log(sum.apply(null, [3, 4])); // 7

////////////////////////////////////////////////////////

// 3. bind() - Criando uma Nova Função com um Valor de this Específico

function greet() {
    return `Hello, ${this.name}!`;
}

const person = { name: 'Jeferson' };

// bind() - Cria uma nova função que, quando chamada, tem 'this' definido para o objeto especificado.
const greetPerson = greet.bind(person);

console.log(greetPerson()); // "Hello, Jeferson!"

////////////////////////////////////////////////////////

// 4. arrow functions - Funções de Seta

// Arrow functions - Sintaxe curta para funções, onde 'this' é lexicamente vinculado (herda o valor de 'this' do contexto de execução onde foi definida).
const multiply = (a, b) => a * b;

console.log(multiply(2, 3)); // 6

////////////////////////////////////////////////////////

// 5. function declarations - Declaração de Funções

// Function declarations - Forma padrão de declarar uma função.
function add(a, b) {
    return a + b;
}

console.log(add(1, 2)); // 3

////////////////////////////////////////////////////////

//6. function expressions - Expressões de Função

// Function expressions - Declaração de função atribuída a uma variável.
const divide = function(a, b) {
    return a / b;
};

console.log(divide(6, 3)); // 2

////////////////////////////////////////////////////////

// 7. immediately invoked function expressions (IIFE) - Funções Autoexecutáveis

// IIFE - Uma função que é definida e imediatamente invocada.
(function() {
    console.log('This function runs immediately!');
})();

////////////////////////////////////////////////////////

//8. rest parameters - Parâmetros Rest

// Rest parameters - Permite representar um número indefinido de argumentos como um array.
function sumAll(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumAll(1, 2, 3, 4)); // 10

////////////////////////////////////////////////////////

// 9. default parameters - Parâmetros Padrão

// Default parameters - Permite definir valores padrão para parâmetros de funções.
function greet(name = 'Guest') {
    return `Hello, ${name}!`;
}

console.log(greet()); // "Hello, Guest!"
console.log(greet('Jeferson')); // "Hello, Jeferson!"

////////////////////////////////////////////////////////

//10. function generator - Funções Geradoras

// Generator functions - Funções que podem pausar a execução e depois retomar.
function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generator();

console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3

////////////////////////////////////////////////////////

//11. function.length - Número de Parâmetros
function add(a, b) {
    return a + b;
}

// function.length - Retorna o número de parâmetros nomeados da função.
console.log(add.length); // 2

////////////////////////////////////////////////////////

// 12. function.name - Nome da Função

const multiply = function multiplyNumbers(a, b) {
    return a * b;
};

// function.name - Retorna o nome da função.
console.log(multiply.name); // "multiplyNumbers"

////////////////////////////////////////////////////////

// 13. function.constructor - Construtor da Função

function add(a, b) {
    return a + b;
}

// function.constructor - Retorna a função construtora que criou a função.
console.log(add.constructor === Function); // true

////////////////////////////////////////////////////////

//14. Function.prototype.toString() - Convertendo Função para String

function multiply(a, b) {
    return a * b;
}

// Function.prototype.toString() - Retorna uma string representando o código fonte da função.
console.log(multiply.toString()); // "function multiply(a, b) { return a * b; }"

////////////////////////////////////////////////////////

// 15. Function.prototype.apply() - Chamando Função com this e Argumentos Array

function add(a, b) {
    return a + b;
}

// Function.prototype.apply() - Chama a função com 'this' e argumentos como array.
console.log(add.apply(null, [1, 2])); // 3

////////////////////////////////////////////////////////

//16. Function.prototype.call() - Chamando Função com this e Argumentos Separados

function add(a, b) {
    return a + b;
}

// Function.prototype.apply() - Chama a função com 'this' e argumentos como array.
console.log(add.apply(null, [1, 2])); // 3

////////////////////////////////////////////////////////

//17. Function.prototype.bind() - Criando Função com this Vinculado

function greet() {
    return `Hello, ${this.name}!`;
}

const person = { name: 'Jeferson' };

// Function.prototype.bind() - Cria uma nova função com 'this' vinculado a um objeto específico.
const greetPerson = greet.bind(person);

console.log(greetPerson()); // "Hello, Jeferson!"

////////////////////////////////////////////////////////

//18. Function.prototype.isGenerator() - Verificando se é um Gerador

function* generator() {
    yield 1;
}

// Function.prototype.isGenerator - Verifica se a função é um gerador.
console.log(generator.constructor.name === 'GeneratorFunction'); // true

////////////////////////////////////////////////////////

//19. Function.prototype.isAsync() - Verificando se é uma Função Assíncrona

async function fetchData() {
    const data = await fetch('https://api.example.com/data');
    return data.json();
}

// Function.prototype.isAsync - Verifica se a função é assíncrona.
console.log(fetchData.constructor.name === 'AsyncFunction'); // true

////////////////////////////////////////////////////////

//20. Function.prototype.arguments - Argumentos Passados para a Função

function showArgs() {
    console.log(arguments);
}

// Function.prototype.arguments - Acesso aos argumentos passados para a função.
showArgs(1, 2, 3); // Arguments [1, 2, 3]
