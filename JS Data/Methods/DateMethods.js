// Criando uma nova data
const date = new Date("2024-08-25T10:30:00");

// Obtendo o ano da data
date.getFullYear(); // 2024
// .getFullYear() - Retorna o ano completo da data. No caso, o ano é 2024.

// Obtendo o mês da data (0-11)
date.getMonth(); // 7
// .getMonth() - Retorna o mês da data, onde 0 corresponde a Janeiro e 11 a Dezembro. No caso, o mês é 7, ou seja, Agosto.

// Obtendo o dia do mês
date.getDate(); // 25
// .getDate() - Retorna o dia do mês da data. No caso, o dia é 25.

// Obtendo o dia da semana (0-6)
date.getDay(); // 0
// .getDay() - Retorna o dia da semana da data, onde 0 corresponde a Domingo e 6 a Sábado. No caso, o dia da semana é Domingo.

// Obtendo as horas da data
date.getHours(); // 10
// .getHours() - Retorna as horas da data (formato 24 horas). No caso, são 10 horas.

// Obtendo os minutos da data
date.getMinutes(); // 30
// .getMinutes() - Retorna os minutos da data. No caso, são 30 minutos.

// Obtendo os segundos da data
date.getSeconds(); // 0
// .getSeconds() - Retorna os segundos da data. No caso, são 0 segundos.

// Obtendo os milissegundos da data
date.getMilliseconds(); // 0
// .getMilliseconds() - Retorna os milissegundos da data. No caso, são 0 milissegundos.

// Definindo o ano da data
date.setFullYear(2025); // 2025-08-25T10:30:00.000Z
// .setFullYear(2025) - Define o ano da data. No caso, o ano foi definido para 2025.

// Definindo o mês da data (0-11)
date.setMonth(11); // 2025-12-25T10:30:00.000Z
// .setMonth(11) - Define o mês da data, onde 0 corresponde a Janeiro e 11 a Dezembro. No caso, o mês foi definido para Dezembro.

// Definindo o dia do mês
date.setDate(31); // 2025-12-31T10:30:00.000Z
// .setDate(31) - Define o dia do mês da data. No caso, o dia foi definido para 31.

// Definindo as horas da data
date.setHours(23); // 2025-12-31T23:30:00.000Z
// .setHours(23) - Define as horas da data (formato 24 horas). No caso, as horas foram definidas para 23.

// Definindo os minutos da data
date.setMinutes(59); // 2025-12-31T23:59:00.000Z
// .setMinutes(59) - Define os minutos da data. No caso, os minutos foram definidos para 59.

// Definindo os segundos da data
date.setSeconds(59); // 2025-12-31T23:59:59.000Z
// .setSeconds(59) - Define os segundos da data. No caso, os segundos foram definidos para 59.

// Definindo os milissegundos da data
date.setMilliseconds(999); // 2025-12-31T23:59:59.999Z
// .setMilliseconds(999) - Define os milissegundos da data. No caso, os milissegundos foram definidos para 999.

// Obtendo o timestamp (milissegundos desde 1º de Janeiro de 1970)
date.getTime(); // 1767225599999
// .getTime() - Retorna o número de milissegundos desde 1º de Janeiro de 1970 até a data especificada. No caso, o timestamp é 1767225599999.

// Definindo a data a partir de um timestamp
date.setTime(0); // 1970-01-01T00:00:00.000Z
// .setTime(0) - Define a data a partir do timestamp fornecido. No caso, a data foi definida para 1º de Janeiro de 1970.

// Obtendo o fuso horário da data (em minutos)
date.getTimezoneOffset(); // -180
// .getTimezoneOffset() - Retorna a diferença, em minutos, entre o fuso horário local e o UTC. No caso, o fuso horário é UTC-3 (Brasil).

// Convertendo a data para string no formato ISO
date.toISOString(); // '1970-01-01T00:00:00.000Z'
// .toISOString() - Retorna a data no formato ISO 8601, que é o formato padrão para transferências de dados. No caso, a data é '1970-01-01T00:00:00.000Z'.

// Convertendo a data para string no formato UTC
date.toUTCString(); // 'Thu, 01 Jan 1970 00:00:00 GMT'
// .toUTCString() - Retorna a data no formato UTC. No caso, a data é 'Thu, 01 Jan 1970 00:00:00 GMT'.

// Convertendo a data para string no formato local
date.toLocaleString(); // '31/12/1969, 21:00:00'
// .toLocaleString() - Retorna a data no formato local. No caso, a data é '31/12/1969, 21:00:00'.

// Convertendo a data para string no formato local, apenas data
date.toLocaleDateString(); // '31/12/1969'
// .toLocaleDateString() - Retorna apenas a data no formato local. No caso, a data é '31/12/1969'.

// Convertendo a data para string no formato local, apenas hora
date.toLocaleTimeString(); // '21:00:00'
// .toLocaleTimeString() - Retorna apenas o horário no formato local. No caso, a hora é '21:00:00'.

// Comparando datas (anterior, posterior ou igual)
const anotherDate = new Date("2024-08-25T10:30:00");
date.getTime() === anotherDate.getTime(); // true
// date.getTime() === anotherDate.getTime() - Compara as duas datas verificando se elas são iguais.

// Diferença entre duas datas (em milissegundos)
anotherDate - date; // 0
// anotherDate - date - Retorna a diferença entre duas datas em milissegundos. No caso, a diferença é 0.
