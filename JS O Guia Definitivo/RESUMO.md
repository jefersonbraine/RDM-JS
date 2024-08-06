
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

Uma função é um bloco de código JavaScript nomeado e parametrizado que você define uma vez, e então,
pode chamar repetidamente.

Alguns Exemplos simples:

As funções são blocos de código JavaScript parametrizados que podemos chamar.

    function plus1(x) {         // Define uma função chamada "plus`" , com o parametro "x"
        return x + 1;           // Retorna um valor uma unidade maior do que o que foi passado
    };                          // As funções são incluidas entre chaves

    plus1(y)                    // => 4: y é 3; portando, essa chamada retorna 3+1
    
    var square = function(x) {  // As funções são valores e podem ser atribuidas a variáveis
        return x * x;           // Calculca o valor da função
    };                          // Um ponto e vírgula marca o fim da atribuição

    square(plus(y))             // => 16: chama duas funções em uma única expressão


### Quando combinamos funções com objetos, obtemos métodos:

Quando funções recebem propriedades de um objeto, as chamamos de métodos.
Todos os objetos de JavaScript tem métodos:

    var a = [];                 // Cria um array vazio
    a.push(1,2,3);              // O método push() adiciona elementos em um array
    a.reverse();                // Outro método: inverte a ordem dos elementos

Também podemos definir nossos próprios métodos, A palavra-chave `this` se refere ao objeto no qual
o método é definido: neste caso, o array de pontos anterior.

    points.dist - function() {  //Define um método para calcular a distância entre pontos

        var p1 = this[0];       //Primeiro elemento do array que chamamos
        var p2 = this[1];       //Segundo elemento do objeto "this"
        var a = p2.x-p1.x;      //Diferença em coordenadas X
        var b = p2.y-p1.y;      //Diferença em coordenadas Y
        return Math.sqrt(a*a + b*b);    //Math.sqrt() calcula a raiz quadrada
    };

    points.dist()               // => 1,414: distância entre nossos 2 pontos

Funções cujos corpos demonstram instruções de controle JavaScript comuns;

As instruções JavaScript incluem condicionais e lações que usam a sintaxe das
linguagens C, C++, Java e outras.

    function abs(x) {           // Uma função para calcular o valor absoluto
        if (x >= 0) {           // A instrução if...
            return x;           // excuta este código, se a comparação for verdadeira.
        }                       // fim da cláusula if.
        else {                  // a cláusula opcional else executa seu código se a comparação for falsa.
            return -x;
        }                       //chaves são opcionais quando há 1 instrução por cláusula
    }                           // observe as instruções return aninhadas dentro de if/else

    function factorial (n) {    // Uma função para calcular o fatoriais
        var product = 1;        // começa com o produto de 1
        while (n > 1) {         // repete as instruções que estão em {}, enquanto a 
                                // expressão em () for verdadeira
            product *= n;       // Atalho para product = prduct * n;
            n--;                // atalho para n = n - 1
        }                       // fim do laço

        return product;         // retonar o produto
    }
    factorial(4)                // => 24: 1*4*3*2


    function factorial2(n) {    // outra versão, usando um laço diferente
        var i, product = 1;     // começa com 1
        for (i=2; i<=n; i++)    // incrementa i automaticamente, de 2 até n
            product *= i;       //faz isso a cada vez. {} não é necessário para laços de 1 linha

            
        return product;         // retorna o fatorial
        

    }

    factorial2(5)               // => 120: 1*2*3*4*5

Exemplo simples que demonstra como definir uma classe JavaScript para representar pontos geométricos
bidimensionais. Os objetos que são instâncias dessa classe têm um único método chamado r() que calcula
a distância do ponto a partir a origem:

Define uma função construtora para inicializar um novo objeto Point

    function Point(x, y) {      // por convenção, as construtoras começam com letras maiúsculas

        this.x = x;             // a palavra chave this é o novo objeto que está sendo inicializado

        this.y = y;             // armazena os argumentos da função como propriedades do objeto

    }                           // nenhum return é necessário

Usa uma função construtora com a palavra-chave `new` para criar instâncias

    var p = new Point(1, 1);   // O ponto geométrico (1,1)

Define métodos para objetos `Point` atribuindo-os ao objeto prototype associado à função construtora.

    Point.prototype.r = function() {
        retun Math.sqrt (               //Retorna a raiz quadrada de x² + y²
            this.x * this.x +           // este é o objeto Point no qual o método...
            this.y * this.y             //...é chamado.
        )
    };

Agora o objeto `Pont b` (e todos os futuros objetos Point) herda o método `r()`.

    p.r()                       // => 1.41


# 1.2 JavaScript do lado do cliente
