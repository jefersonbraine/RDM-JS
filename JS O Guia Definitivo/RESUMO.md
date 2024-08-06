
# JS O GUIA DEFINITIVO - ANOTAÇÕES

 Tudo que vem após as barras normais duplas é um comentário em linguagem natural


Variável `é um nome simbólico` para um valor
As variáveis são declaradas com a palavra-chave `var`.

    varx;          // Declara uma variável chamada `x`

#### Valores podem ser reatribuidos às variaveis com o sinal `=`.

    x = 0;     // Agora a variável `x` tem o valor de `0`
    x          // => 0: Uma variável é avaliada com seu valor.

#### JavaScript aceita vários tipos de valores

    x = 1;                      //Números. 
    x = 0.01;                   //Apenas um tipo `Number` para inteiros ou reais.
    x = "Hello world";          //Strings de texto entre aspas.
    x = 'JavaScript';           //Apóstrfos também delimitam strings.
    x = true;                   //Valores booleanos.
    x = false;                  //Valores booleanos.
    x = null;                   //Null é um valor especial que significa "nenhum valor".	
    x = undefined;              //Undefined é como `null`.git a


#### O tipo de dados mais importante de JavaScript é o OBJETO.

Um objeto é uma coleção de pares nome/valor ou uma string para mapa de valores.

    var book = {                //Objetos sào colocados entre chaves.
        topic: "JavaScript",    //A propriedade "topic" tem o valor "JavaScript".
        fat: true               // A propriedade "fat" tem o valor true.
    };                          // A chave marca o fim do objeto.



Acesso as propriedades de um objeto com . ou []:

    book.topic                  // => "JavaScript"
    book["fat"]                 // => true: outro modo de acessar valores de propriedade
    book.author = "Flanagan";   //Crie novas propriedades por meio de atribuição.
    book.contents = {}          //{} é um objeto vazio sem qualquer propriedade.

JavaScript também aceita arrays ( listas indexadas numericamente) de valores.

    var primes =  [2, 3, 5, 7]; //Um varraay de 4 valores, delimitados por colchetes
    primes [0]                  // => 2: o primeiro elemento (índice 0) do array.
    primes.length               // => 4: a quantidade de elementos no array.
    primes.[primes.length - 1]  // => 7: o último elemento do array
    primes[4] = 9;              // Adiciona um novo elemento por meio de atribuição
    primes[4] = 11;             // Ou altera um elemento por meio de atribuição.
    var empty = [];             // [] é um array vazio, sem qualquer elemento
    empty.length                // => 0

Os arrays e objetos podem conter outros arrays e objetos:

    var points = [              // Um array com 2 elementos.
        {x:0, y:0},             // Cada elementos é um objeto.
        {x:1, y:1},
    ];
    var data = {                // Um objeto com 2 propriedades.
        trial1:[[1,2],[3,4]],   // O valor de cada propriedade é um array.
        trial2:[[2,3],[4,5]],   // Os elementos dos arrays são arrays.
    }

A sintaxe ilustrada anteriormente para listar elementos de array entre chaves ou para mapear nomesde propriedade de objeto em valores de propriedade entre colchetes é conhecida como expressão inicializadora.

Uma expressão é uma frase em JavaScript que pode ser *avaliada* para produzir um valor.
O uso de `.` e `[]` para se referir ao valor de uma propriedade de objeto ou a um elemento de array é uma `expressão`, por exemplo. No código anterior que, quando uma expressão aparece sozinha em uma linha, o comentário que se segue começa com uma seta (=>) e o valor da expressão.

#### Uma das maneinas mais comuns de formar expressões em JavaScript é usar *operadores*, como segue:

Os operadores atuam sobre os valores (operandos) para produizr um novo valor.<br>
Os operadores aritméticos são os mais comuns:

    3+2                          // => 5: adição
    3-2                          // => 1: subtração
    3*2                          // => 6: multiplicação
    3/2                         // => 1.5: divisão
    poitns[1].x - points[0].x   // => 1: operandos mais complicados também funcionam
    "3" + 2                     // => "32": + soma número ou faz a concatenação de strings

JavaScript define alguns operadores aritméticos de forma abreviada:

    var count = 0;            // Define uma variável
    count++;                  // Incrementa o valor da variável
    count--;                  // Decrementa o valor da variável
    count += 2;               // Soma 2: o mesmo que count = count + 2;
    count *= 3;               // Multiplica por 3: o mesmo que count = count * 3;'
    count                      // => 6: nomes de variáveis também são expressões.

Os operadores de igualdade e relacionais testam se dois valores são iguais,  
desiguais, menores que, maiores que, etc. São avaliados como verdadeiros ou falsos.

    var x = 2, y = 3;           // Esses sinais = são atribuiçÕes e não testes de igualdade

    x == y                      // => falso: igualdade
    x != y                      // => true: desigualdade
    x < y                       // => true: menor que
    x <= y                      // => true: menor ou igual a
    x > y                       // => false: maior que
    x >= y                      // => false: maior ou igual a
    "two" == "three"            // => falso: as duas strings são diferentes
    "two" > "three"             // => true: 'tw' é alfabeticamente maior do que 'th'
    false == (x > y)            // => true: falso é igual a falso

Os operadores lógicos combina, ou invertem valores booleanos

    (x == 2) && (y == 3)        // => verdadeiro: as duas comparações são verdaderias. && é E

    ( x > 3) || (y < 3)         // => falso: nenhuma das comparações é verdadeira || é OU
    !(x == y)                   // => verdadeiro: ! inverte um valor booleano

As linhas que terminam com ponto e vírgula são instruções. Em linhas gerais uma expressão é algo que calcula um valor, mas não faz nada: ela não altera o estado do
programa de modo algum. As instruções, por outro lado, não tem um valor (ou não tem um valor com que nos preocupemos), mas alteram o estado.