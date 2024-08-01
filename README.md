# Oque é Javascript?

JavaScript é uma linguagem de programação que potencializa o comportamento dinâmico na maioria dos sites, permitindo
implemntar itens complexos em página web.

Está presente sempre que uma página da web faz mais do que simplesmente mostrar a você informação estática, mostrando
conteúdo que se atualiza em um intervalo de tempo, mapas interativos ou gráficos 2D/3D animados, etc.

Cria conteúdo que se atualiza dinamicamente, contra múltimidias, imagens animadas, e tudo o mais que há de interessante.
OK, não tudo, mas é maravilhoso o que se pode efetuar com algumas linhas de Código JavaScript.

Junto com HTML e CSS, é uma tecnologia central que faz a web funcionar.

#CONSOLE

O console é um painel que exibe mensagens importantes para as pessoas desenvolvedoras.
Muito do trabalho que o computador faz com o código é invisivel para nós por padrão. Se
quisermos que as coisas apareçam em nossa tela podemos imprimir ou registrar diretamente
em nosso console.

Em JavaScript, a palavra-chave **console**, se refere a um objeto, uma coleção de dados
e ações, que podemos usar em nosso código.

Uma ação ou método embutido no objeto **console** é o método `.log()`. Ao escrever 
`console.log()`, o que estiver entre os parênteses será impresso ou registrado no console.

`console.log('Boas-vindas a essa explicação');
-----------------------------------------------------
Terminal:

Boas-vindas a essa explicação
-----------------------------------------------------

O método console.log() é usado para registrar ou imprimir mensagens no console, mas também
pode ser usado para imprimir objetos e outras informações.

#COMENTÁRIOS

Seu próprio código pode tornar-se dificil de ser entendido quando você retornar a ele tempos
depois. Além disso, programar é uma atividae colaborativa, Por esses motivos, é útil deixar 
notas explicativas no código para nós mesmos ou outras pessoas desenvolvedoras.

Tais notas, ou comentários, existem apenas para leitores humanos e não são interpretados
pelo navegador.

Os comentários são boas práticas por vários motivos, como por exemplo, organizar as partes 
do código, explicar o funcionamento de blocos de código, dar dicas, deixar instruções ou
qualquer outra informação útil para outras pessoas, etc.

Em JavaScript, os **comentários de linha única** são criados com duas barras consecutivas //.

`// Duas barras significam um comentário`

Já os **comentários de várias linhas são criados circundando as linhas com /* no inicio e */
no final.

`/*
Use uma barra com asterisco no inicio e 
no final para comentários de várias linhas
*/

Também é possivel comentar algo no meio de uma linhas de código

`console.log(/*Boas-vindas a*/ 'Explicação');`
---------------------------------------------------
Terminal:

`Explicação`
------------------------------------------------------


#TIPOS DE DADOS

Os tipos de dados são as classificações dos diferentes tipos de dados usados na
programação. Em JavaScript, o mais recente padrão ECMAScript 6 define sete tipos de dados
fundamentais: **number, string, boolean, null, undefined, symbol e object.**

Seis tipos de dados são considerados tipos de dados primitivos e sào os mais básicos da
linguagem:

 - Number(Número): Qualquer número, incluindo números
 com decimais: 4, 8, 1516, 23.42.

    `const quantidade = 24;
    let preco = 1.99;`

 - String: qualquer agrupamento de caracteres
 (letras, números, espaços, símbolos, etc.)
 sempre entre aspas simpes '...' ou duplas "...".

    `let simples = 'Onde está o Niro?';
    let duplas = "Onde está o Niro?";`

 - Boolean (Booleano): tipo de dado com apenas dois valores
  possiveis - True ou False. (verdadeiro ou falso) sem aspas.

        `let horaDeAprender = true;
        let horaParaAprender = false;`

  - Null(Nulo): representa a ausência intencional de um valor
  e é representando pela palavra-chave 'null' (sem aspas). 
  Devido ao JavaScript ser case-sensitive, `null` não é o mesmo que
  `Null`, `NULL`, ou ainda outra variação.

        `let y = null;`

 - Undefined (Indefinido): este tipo de dados é denotado pela
 palavra-chave 'undefined' (sem aspas). Também representa
 a ausencia de um valor, embora tenha um uso diferente de 'null'.
 Variáveis que são declaradas, mas não são inicializadas com um valor,
 terão o valor 'undefined'.

        `var = programar;
        console.log(programar);`
-----------------------------------------------------
Terminal:

`undefined`
-----------------------------------------------------

 - Symbol (Simbolo): um recurso mais recente da linguagem
 (novo em ECMAScript 6), os símbolos são indentificadores exclusivos com
 instâncias únicas e imutáveis, úteis em uma codificação mais complexa.

 Por fim, um tipo de dado não primitivo, diferente dos 6 tipos acima:

  - Object (Objeto): são coleções de dados relacionados mais complexos.
  Pense em objetos como recipientes para os valores. Você aprenderá
  mais sobre eles à medidas que aprenderá sobre JavaScript.

#OPERADORES ARITMÉTICOS

A aritmética é útil na programação quando um operador executa uma tarefa
no código que permite realizar cálculos matemáticos em números.

Os operadores aritméticos aceitam valores numéricos (literais ou variáveis)
como seus operandos e retornam um único valor numérico.

Os operadores integrados ao JavaScript e seus símbolos são os seguntes:

 - Add (Adicionar): +

  `console.log(35 + 3.5);`
  --------------------------------
  Terminal:

  `38.5`
  -------------------------------
 - Subtract (Subtrair): -

  `console.log(2022 - 1986);`
  --------------------------------
  Terminal:

  `36`
  -------------------------------
  - Multiply (Multiplicar): *

  `console.log(0.2708 * 102);`
  --------------------------------
  Terminal:

  `27.621599999999997`
  -------------------------------
  - Divide (Dividir): /

  `console.log(0.2708 / 102);`
  --------------------------------
  Terminal:

  `0.35625`
  -------------------------------
  - Remainder (Restante): %

  `console.log(22 % 3);`
  --------------------------------
  Terminal:

  `1`
  -------------------------------

#CONCATENAÇÃO DE STRINGS

Em JavaScript, os operadores não são apenas para números. 
Várias strings podem ser concatenadas usando o operador `+`, que anexa
a string da direita à string da esquerda.

`console.log('Ola ' + 'mundo');`
--------------------------------
Terminal:
`Ola mundo`
--------------------------------

O processo de anexar uma string a outra é
chamado de concatenação, em inglês: 
String Concatenation.

`console.log('Eu estou aprendendo ' + 'JS do inicio ao fim');`
--------------------------------
Terminal:
`Eu estou aprendendo JS do inicio ao fim`
--------------------------------

Observe que no exemplo acima foi preciso incluir um espaço
no final da primeira string. As strings serão unidas de forma exata,
portando, deve-se incluir sempre o espaço desejado entre duas strings

`console.log('Espaço no ' + 'inicio')
console.log('Espaço' + ' no final');
console.log('Sem' + ' espaco');
console.log('Espaço' + ' ' + ' no meio');`
--------------------------------
Terminal:
`Espaço no inicio
Espaço no final
Sem espaco
Espaço no meio`
--------------------------------

No exemplo abaixo, várias strings e variáveis
contendo valores de string serào concatenadas.
Após a execução do bloco de código, a variável
**exibirPagamento** conterá a string concatenada.

`let formaPagamento = 'PIX';
let data = '05 de dezembro';
let exibirPagamento = 'Sua compra será paga com ' + formaPagamento + ' em ' + data + '.';

console.log(exibirPagamento);`
--------------------------------
Terminal:
`Sua compra será paga com PIX em 05 de dezembro.`
--------------------------------

#PROPRIEDADES

Quando um novo dado é introduzido em um programa JavaScript, o navegador o salva
como uma instância do tipo de dados. Cada instância de string, por exemplo, tem uma
propriedade chamada de `length` que armazena o número de caracteres da string.
É possivel recuperar informações de propriedade anexando à string um ponto
e o nome da propriedade:

`console.log('JavaScript'.length);`
--------------------------------
Terminal:
`10`
--------------------------------

No exemplo acima, o valor salvo da propriedade `length` fé recuperado da
instância da string `JavaScript`. O número 10 é impresso no console,
pos JavaScript contém 10 caracteres.

O `.` é outro operador, chamado de operador de ponto.

#MÉTODOS

JavaScript fornece diferentes métodos de string, ou seja,
diferentes ações que podemos realizar nas strings.

Quando usamos, isto é, **chamamos** métodos anexados a uma instância,
devemos:

 - adicinar um ponto (o operador ponto .)
 - informar o nome do método
 - abrir e fechar os parenteses.

 Ex.: 'sitrngExemplo'.NomeMetodo();

 Ao usar console.log(), por exemplo,
 chamamos o método .log() no objeto 
 console. Sacou?

 Veja dois exemplos do console.log() e 
 métodos em strings.

 `console.log('niro'.toUpperCase());
 console.log('Roni'.startsWith('R'));`
--------------------------------
Terminal:
`NIRO`
`true`
--------------------------------

No primeiro caso, o método .toUpperCase()
foi chamado na instância da string 'niro'.
O método retorna uma string em letras maiúsculas
e o resultado registrado no console foi 'NIRO'.

No segundo caso, o método .startsWith() foi
chamado na instância da string 'Roni'. O
caractere 'R' foi passado como uma entrada,
ou argumento, entre parênteses. Como a string
inicia-se com a letra 'R', o método retornou
um valor booleano, registrando true no console.

#OBJETOS EMBUTIDOS

Mais a frente, você saberá como construir seus próprios objetos, 
mas por enquanto esses objetos "embutidos" estão cheios de
funcionalidade úteis.

Por exemplo, para realizar operações matemáticas mais complexas
do que aritméticas, o JavaScript tem o objeto embutido `Math`.
A grande vantagem dos objetos é que eles possuem métodos.

Veja o exemplo abaixo onde é chamado o método
.random() no objeto embutido Math:

`console.log(Math.random());`
--------------------------------
Terminal:
`0.123456789`
--------------------------------

Este método retorna um número aleatório 
entre 0 (inclusivo) e 1 (exclusivo).

Para gera um número aleatório entre 0 e 50,
multiplique por 50:

`console.log(Math.random() * 50);`
--------------------------------
Terminal:
`45.123456789`
--------------------------------

Para que o resultado seja um número inteiro
e não um decimal, pode-se usar outro método
chamado Math.floor(), que arredonda para
baixo para o número inteiro mais proximo:

`console.log(Math.floor(Math.random() * 50));`
--------------------------------
Terminal:
`45`
--------------------------------