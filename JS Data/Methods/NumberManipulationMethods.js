// 1. Number.isInteger() - Verifica se um Valor é um Inteiro

console.log(Number.isInteger(4)); // true
console.log(Number.isInteger(4.5)); // false

//////////////////////////////////////////////////////////////////////

//2. Number.isNaN() - Verifica se o Valor é NaN

console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(4)); // false

////////////////////////////////////////////////////////////////////

//3. Number.parseInt() - Converte uma String para Inteiro

console.log(Number.parseInt('10')); // 10
console.log(Number.parseInt('10.5')); // 10

////////////////////////////////////////////////////////////////////

//4. Number.parseFloat() - Converte uma String para Float

console.log(Number.parseFloat('10.5')); // 10.5
console.log(Number.parseFloat('10')); // 10

////////////////////////////////////////////////////////////////////

// 5. Number.toFixed() - Formata um Número com um Número Específico de Casas Decimais

const num = 2.34567;
console.log(num.toFixed(2)); // "2.35"

////////////////////////////////////////////////////////////////////

//6. Number.toPrecision() - Formata um Número para um Comprimento Específico

const num = 2.34567;
console.log(num.toPrecision(4)); // "2.346"

////////////////////////////////////////////////////////////////////

//7. Number.toString() - Converte um Número para String

const num = 255;
console.log(num.toString()); // "255"
console.log(num.toString(16)); // "ff" (conversão para hexadecimal)

////////////////////////////////////////////////////////////////////

//8. Number.isFinite() - Verifica se o Valor é um Número Finito

console.log(Number.isFinite(10)); // true
console.log(Number.isFinite(Infinity)); // false

////////////////////////////////////////////////////////////////////

//9. Number.isSafeInteger() - Verifica se o Valor é um Inteiro Seguro

console.log(Number.isSafeInteger(10)); // true
console.log(Number.isSafeInteger(Math.pow(2, 53))); // false

////////////////////////////////////////////////////////////////////

//10. Math.abs() - Retorna o Valor Absoluto de um Número

console.log(Math.abs(-5)); // 5
console.log(Math.abs(5)); // 5

////////////////////////////////////////////////////////////////////

//11. Math.ceil() - Arredonda um Número para Cima

console.log(Math.ceil(4.2)); // 5
console.log(Math.ceil(-4.2)); // -4

////////////////////////////////////////////////////////////////////

//12. Math.floor() - Arredonda um Número para Baixo

console.log(Math.floor(4.8)); // 4
console.log(Math.floor(-4.8)); // -5

////////////////////////////////////////////////////////////////////

//13. Math.round() - Arredonda um Número para o Inteiro Mais Próximo

console.log(Math.round(4.5)); // 5
console.log(Math.round(4.4)); // 4

//14. Math.max() - Retorna o Maior Valor entre os Argumentos

console.log(Math.max(1, 2, 3, 4)); // 4
console.log(Math.max(-1, -2, -3, -4)); // -1

///////////////////////////////////////////////////////////////////

//15. Math.min() - Retorna o Menor Valor entre os Argumentos

console.log(Math.min(1, 2, 3, 4)); // 1
console.log(Math.min(-1, -2, -3, -4)); // -4

///////////////////////////////////////////////////////////////////

//16. Math.pow() - Calcula a Potência de um Número

console.log(Math.pow(2, 3)); // 8
console.log(Math.pow(5, 2)); // 25

///////////////////////////////////////////////////////////////////

//17. Math.sqrt() - Calcula a Raiz Quadrada de um Número

console.log(Math.sqrt(16)); // 4
console.log(Math.sqrt(25)); // 5

///////////////////////////////////////////////////////////////////

//18. Math.random() - Retorna um Número Aleatório entre 0 e 1

console.log(Math.random()); // e.g., 0.678912345 (número aleatório)

///////////////////////////////////////////////////////////////////

//19. Math.trunc() - Remove a Parte Decimal de um Número

console.log(Math.trunc(4.9)); // 4
console.log(Math.trunc(-4.9)); // -4

///////////////////////////////////////////////////////////////////

//20. Math.sign() - Retorna o Sinal do Número
console.log(Math.sign(10)); // 1
console.log(Math.sign(-10)); // -1
console.log(Math.sign(0)); // 0

///////////////////////////////////////////////////////////////////

//21. Math.log() - Calcula o Logaritmo Natural (Base e) de um Número

console.log(Math.log(1)); // 0
console.log(Math.log(Math.E)); // 1

///////////////////////////////////////////////////////////////////

//22. Math.log10() - Calcula o Logaritmo de Base 10 de um Número

console.log(Math.log10(10)); // 1
console.log(Math.log10(100)); // 2

///////////////////////////////////////////////////////////////////

//23. Math.exp() - Retorna o Exponencial de um Número

console.log(Math.exp(1)); // 2.718281828459045 (equivalente a Math.E)
console.log(Math.exp(2)); // 7.389056098930649

///////////////////////////////////////////////////////////////////

//24. Math.cbrt() - Calcula a Raiz Cúbica de um Número

console.log(Math.cbrt(8)); // 2
console.log(Math.cbrt(27)); // 3

///////////////////////////////////////////////////////////////////

//25. Math.hypot() - Calcula a Raiz Quadrada da Soma dos Quadrados de seus Argumentos

console.log(Math.hypot(3, 4)); // 5 (equivalente ao teorema de Pitágoras)
console.log(Math.hypot(5, 12)); // 13
