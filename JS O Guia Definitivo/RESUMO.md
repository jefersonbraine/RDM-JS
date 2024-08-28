
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


# JavaScript do lado do cliente

A função a seguir demonstra diversas dessas técnicas básicas de `pesquisa e modificaçào de documentos`.

Se o documento não contém esta seção, cria uma.

    function debug(msg) {
        //localiza a seção de depuração do documento, examinando os atributos de identificação HTML

        var log = document.getElementById("debuglog");

        // Se não existe elemente algum com a identificação "debuglog", cria um.

        if(!log) {
            log = documento.createElement("div");   // cria um novo elemento <div>
            log.id = "debuglog";                    // define o atribuito de identificação HTML nele

            log.innerHTML = "<h1>Debug Log</h1>";   // define o conteúdo inicial

            document.body.appendChild(log);         // adiciona-o no final do documento
        }


        // Agora, coloca a mensagem em seu próprio <pre> e a anexa no log

        var pre = document.createElement("pre");    // crima uma marca <pre>
        var text = document.createTextNode(msg);    // coloca a msg em um nó de texto
        pre.appendChild(text);                      // adiciona o texto no <pre>
        log.appendChild(pre);                       // adiciona o <pre> no log
    }

    

### Rotinas de tratamento de evento.
Uma rotina de tratamento de evento é uma função JS que registramos no navegador e que este chama quando ocorre algum tipo de evento especificado, pode ser um cloque, pressionamento de tecla (ou em um celular, um gesto de algum tipo) ou então, uma rotina de tratamento de evento pode ser ativada quando o navegador termina de carregar o documento, quando o usuário redimensiona a janela ou quando é inserido dados em um formulário HTML.

O modo mais simples de definir rotinas de tratamento de evento é com atributos HTML, que começam com "on". O "onclick" é bem útil; quando está se escrevendo programas simples.

Aqui está um código do lado do cliente que utiliza eventos, ele registra uma rotina de tratamento de evento, para o evento "load" e também demonstra uma maneira mais sofisticada de registrar funções de rotina de tratamento de evento "click".

    //O vento 'load" ocorre quando um documento está totalmente carregado. Normalmente
    //precisamos esperar por esse evento antes de começarmos a executar.

    window.onload = function() {            // Executa esta funçõa quando o documento for carregado
        //localiza todas as marcas <img> no documento
        var images - document.getElementsByTagName("img");

        // faz um laço por elas, adicionando uma rotina de tratamento de evento "click"em
        //cada uma para que clicar na imagem a oculte

        for(var i = 0; i < images.length; i++) {
            var image = images[i];
            if (image.addEventListener) { // outro modo de registrar uma rotina de tratamento
                
                image.addEventListener("click", hide, false);

            } else {                    // para compatibilidade com IE8 e anteriores
                image.attachEvent("onclick", hide);
            }
        }

        // está é a funçào de rotina para tratamento de evento registrada anteriormente 
        function hide(event) { event.target.style.visibility = "hidden"; }

    }

## Exemplo de calculadora de empréstimos no EX2

O exemplo demonstra vários recursos da linguagem básica e também importantes técnicas do lado do cliente.

 - Como localizar elementos em um documento
 - Como obter entrada do usuário a partir de elementtos de entrada de formulários.
 - Como definir o conteúdo HTML de elementos do documento
 - como armazenar dados no navegador
 - Com fazer requisições HTTP em scripts
 - Como desenhar gráficos com o elemento <canvas>

 # Estrutura léxica

 ## Conjunto de caracteres
 Os programas JS são escritos com o o conjunto de caracteres Unicode, que é um superconjunto de ASCCI e Latin-1, suportando praticamente todos os idiomas escritos usados hoje.

 ### Maiúscuals e minúsculas
 JS diferencia letras maiúsculas de minúsculas, isso significa que palavras-chaves, variáveis, nomes de função e outros identificadores da linguagem sempre devem ser digitados da mesma forma, a palavra-chave `while`, pode exemplo, deve ser digitada `while` e não `While` ou `WHILE`. Da mesma forma, online, Online, OnLine e ONLINE, são quatros nomes totalmente diferentes.

 ### Espaço em branco, quebras de linhas e caracteres de controle de formato
O JS ignora os espaços que aparecem entre sinais em programas, como também ignora quebras de linhas (mas existe uma exceção na seção 2.5), mas é possivel usar formatando e endentando os programas de um modo organizado e harmonioso.

Além do caractere de espaço normal (\u0020), JavaScript também reconhece os seguintes caracteres como espaço em branco: tabulação (\u0009), tabulação vertical ( \u000B), avanço de página ( \u000C), espaço não separável (\u00A0), marca de ordem de byte (\uFEFF) e qualquer caractere unicode da categoria Zs. JavaScript reconhece os seguintes caracteres como términos de linha: avanço de linha ( \u000A), retorno de carro (\u000D), separador de linha (\u2028) e separador de parágrafo (\u2029). Uma sequência retorno de carro, avanço de linha é tratada como um único término de linha.

Os caracteres de controle de formato Unicode (categoria Cf ), como RIGHT-TO-LEFT MARK
( \u200F ) e LEFT-TO-RIGHT MARK ( \u200E ), controlam a apresentação visual do texto em que
ocorrem. Eles são importantes para a exibição correta de alguns idiomas e são permitidos em comen-tários, strings literais e expressões regulares literais de JavaScript, mas não nos identificadores (por exemplo, nomes de variável) de um programa JavaScript. Como casos especiais, ZERO WIDTH JOINER ( \u200D ) e ZERO WIDTH NON-JOINER ( \u200C ) são permitidos em identificadores, mas não como o primeiro caractere. Conforme observado anteriormente, o caractere de controle de formato de marca de ordem de byte (\uFEFF) é tratado como caractere de espaço.

## Comentários

    // Comentário de uma linha
    /* Este também é um comentário */ // e aqui está outro comentário.
    /*
    * Este é ainda outro comentário.
    * Ele tem várias linhas.
    */

## Literais
Um literal é um valor de dados que aparece diretamente em um programa. Os valores seguintes são todos literais:
12                  // O número doze
1.2                 // O número um ponto dois
"hello world"       // Uma string de texto
'Hi'                // Outra string
true                // Um valor booleano
false               // O outro valor booleano
/javascript/gi      // Uma "expressão regular" literal (para comparação de padrões)
null                // Ausência de um objeto

## Identificadores e palavras reservadas
Um identificador é simplesmente um nome, eles são usados para nomes a variáveis e funções para fornecer rótulos para certos laços no código JavaScript, um identificador deve começar com uma letra, um sublinhado(_) ou um cifrão($), já os seguintes podem ser letras, digitos, sublinhados ou cifrões.

Todos estes são identificadores válidos:

    i
    my_variable_name
    v13
    _dummy
    $str

## Pontos e vírgulas opcionais
Em JavaScript, você normalmente pode omitir o ponto e vírgula entre duas instruções, caso essas instruções sejam escritas em linhas separadas. (Você também pode omitir um ponto e vírgula no final de um programa ou se o próximo sinal do programa for uma chave de fechamento `}`.)

Muitos programadores JavaScript (e o código deste livro) utilizam pontos e vírgulas para marcar explicitamente os finais de instruções, mesmo onde eles não são obrigatório.

Considere o código a seguir. Como as duas instruções aparecem em linhas separadas, o primeiro
ponto e vírgula poderia ser omitido:

    a = 3;
    b = 4;

Contudo, escrito como a seguir, o primeiro ponto e vírgula é obrigatório:

    a = 3; b = 4;

JavaScript não trata toda quebra de linha como ponto e vírgula, geralmente trata as quebras de linha como pontos e vírgulas somente se não consegue analisar o código sem os pontos e vírgulas. Mais formalmente (e com as duas exceções, descritas a seguir), JavaScript trata uma quebra de linha como ponto e vírgula caso o próximo caractere que não seja espaço não possa ser interpretado como a continuação da instrução corrente. Considere o código a seguir:

    var a
    a
    =
    3
    console.log(a)

JavaScript interpreta esse código como segue:

    var a; a = 3; console.log(a);

avaScript trata a primeira quebra de linha como ponto e vírgula porque não pode analisar o código. O segundo a poderia aparecer sozinho como a instrução a; , mas JavaScript não trata a segunda quebra de linha como ponto e vírgula porque pode continuar analisando a instrução mais longa a = 3;.

O código a seguir parece ser duas instruções distintas, separadas por uma nova linha:

    var y = x + f
    (a+b).toString()

Porém, os parênteses na segunda linha de código podem ser interpretados como uma chamada de
função de f da primeira linha, sendo que JavaScript interpreta o código como segue:

    var y = x + f(a+b).toString();

# Tipos, valores e variáveis

### Tipos de Dados em JavaScript
- Números: Usados para representar quantidades, como a sua idade ou o preço de um produto.
Texto (Strings): Usados para representar palavras, frases ou qualquer texto que você queira exibir na tela.

- Booleanos: Representam apenas dois valores: verdadeiro (true) ou falso (false). São usados para tomar decisões em seus programas.

- Null e Undefined: Representam a ausência de valor. É como se fosse uma caixa vazia.

- Objetos: São como caixas que podem conter vários tipos de dados, como uma lista de compras ou um cadastro de usuário.

- Arrays: São listas ordenadas de valores. Imagine uma lista de nomes de seus amigos.
Funções: São blocos de código que podem ser executados quando chamados. É como uma receita de bolo que você pode seguir para preparar algo.

Valores em JavaScript são como os "ingredientes" que usamos para construir nossos programas. Eles são as informações que manipulamos e armazenamos.

### Tipos de Valores:

#### Primitivos:
   - Números: Representam quantidades numéricas, como 42, 3.14, -5.

   - Strings: Representam sequências de caracteres, como "Olá, mundo!", "JavaScript é legal".

   - Booleanos: Representam valores lógicos, verdadeiro (true) ou falso (false).

   - Null: Representa a ausência intencional de qualquer objeto valor.

   - Undefined: Representa uma variável que foi declarada, mas ainda não recebeu um valor.

- Objetos: São coleções de propriedades, onde cada propriedade tem um nome e um valor. Exemplos incluem arrays, funções e objetos personalizados.


### Variáveis: Caixas para Guardar Valores

**Variáveis são como caixas com rótulos.** Você pode colocar qualquer tipo de dado dentro dessas caixas e dar um nome para cada caixa. Assim, você pode encontrar o valor que precisa mais facilmente.

Por exemplo, você pode criar uma variável chamada `nome` e colocar o seu nome dentro dela. Depois, você pode usar essa variável em outras partes do seu código para se referir ao seu nome.

## Números
JavaScript não faz distinção entre valores inteiros e valores em ponto flutuante, todos são representados como valores em ponto flutuante.

Quando um número aparece diretamente ele é chamado de *literal numérico*.

### Literais Inteiros
No JavaScript, um inteiro de base 10 é escrito como uma sequência de digitos, por exemplo:

    0
    3
    10000000

Além da base 10, JavaScript reconhece valores hexadecimais (base 16)

### Literais Inteiros
Os literais em ponto flutuante podem ter um ponto decimal; eles uisam sintaxe tradicional dos números reais.

Os literais em ponto flutuante também podem ser representados usando-se notação exponencial, por exemplo:

Mais sucintamente, a sintaxe é:
[dígitos][.dígitos][(E|e)[(+|-)]dígitos]

Por exemplo:
3.14
2345.789
.333333333333333333
6.02e23 // 6.02 × 10²³
1.4738223E-32 // 1.4738223 × 10³²

### Aritmética em JavaScript
Além dos operadores aritméticos básicos (+, -, *, /, %, **), JavaScript tem outros operadores aritméticos que vão ajudar a fazer operações mais complexas.

    Math.pow(2,53)              // => 9007199254740992: 2 elevado à potência 53
    Math.round(.6)              // => 1.0: arredonda para o inteiro mais próximo
    Math.ceil(.6)               // => 1.0: arredonda para cima para um inteiro
    Math.floor(.6)              // => 0.0: arredonda para baixo para um inteiro
    Math.abs(-5)                // => 5: valor absoluto
    Math.max(x,y,z)             // Retorna o maior argumento
    Math.min(x,y,z)             // Retorna o menor argumento
    Math.random()               // Número pseudoaleatório x, onde 0 <= x < 1.0
    Math.PI                     // π: circunferência de um círculo / diâmetro
    Math.E                      // e: A base do logaritmo natural
    Math.sqrt(3)                // A raiz quadrada de 3
    Math.pow(3, 1/3)            // A raiz cúbica de 3
    Math.sin(0)                 // Trigonometria: também Math.cos, Math.atan, etc.
    Math.log(10)                // Logaritmo natural de 10
    Math.log(100)/Math.LN10     // Logaritmo de base 10 de 100
    Math.log(512)/Math.LN2      // Logaritmo de base 2 de 512
    Math.exp(3)                 // Math.E ao cubo

### Datas e horas
JavaScript básico inclui uma construtora `Date()` para criar objetos que representam datas e horas.

    var then = new Date(2010, 0, 1);        // O 1º dia do 1º mês de 2010
    var later = new Date(2010, 0, 1,        // O mesmo dia, às 5:10:30 da tarde, hora local 17, 10, 30);
    var now = new Date();                   // A data e hora atuais
    var elapsed = now – then;               // Subtração de data: intervalo em milissegundos
    later.getFullYear()                     // => 2010
    later.getMonth()                        // => 0: meses com base em zero
    later.getDate()                         // => 1: dias com base em um
    later.getDay()                          // => 5: dia da semana. 0 é domingo, 5 é sexta-feira.
    later.getHours()                        // => 17: 5 da tarde, hora local
    later.getUTCHours()                     // Horas em UTC; depende do fuso horário
    later.toString()                        // => "Sexta-feira, 01 de janeiro de 2010, 17:10:30 GMT-0800 (PST)"
    later.toUTCString()                     // => "Sábado, 02 de janeiro de 2010, 01:10:30 GMT"
    later.toLocaleDateString()              // => "01/01/2010"
    later.toLocaleTimeString()              // => "05:10:30 PM"
    later.toISOString()                     // => "2010-01-02T01:10:30.000Z"; somente ES5

## Texto

### Sequência de escape em string literais
**Imagine que você está escrevendo uma carta**. Às vezes, você precisa usar símbolos especiais, como uma nova linha para começar um parágrafo ou aspas para destacar uma frase. Em JavaScript, quando você coloca texto dentro de aspas (simples ou duplas), isso é chamado de string. Mas e se você quiser incluir esses símbolos especiais dentro da sua string? É aí que entram as sequências de escape.

**O que são sequências de escape?**

São combinações de caracteres que começam com uma barra invertida () e têm um significado especial. Elas permitem que você represente caracteres que de outra forma seriam difíceis ou impossíveis de incluir diretamente em uma string.

**Por que precisamos delas?**

- Caracteres especiais: Para incluir caracteres como nova linha, tabulação, aspas dentro de aspas, etc.

- Caracteres não imprimíveis: Para representar caracteres que não podem ser digitados diretamente no teclado.

        Sequência	Caractere representado
        \n	            Nova linha
        \t	            Tabulação
        \	            Barra invertida
        '	            Aspas simples
        "	            Aspas duplas
        \b	            Backspace
        \f	            Form feed
        \r	            Retorno de carro
        \0	            o caractere null  

### Trabalhando com string
Existem vários métodos que podem ser chamados em strings (como
sempre, consulte a seção de referência para ver detalhes completos):

    var s = "hello, world" // Começa com um texto.
    s.charAt(0) // => "h": o primeiro caractere.
    s.charAt(s.length-1) // => "d": o último caractere.
    s.substring(1,4) // => "ell": o 2º, 3º e 4º caracteres.
    s.slice(1,4) // => "ell": a mesma coisa
    s.slice(-3) // => "rld": os últimos 3 caracteres
    s.indexOf("l") // => 2: posição da primeira letra l.
    s.lastIndexOf("l") // => 10: posição da última letra l.
    s.indexOf("l", 3) // => 3: posição do primeiro "l" em ou após 3
    s.split(", ") // => ["hello", "world"] divide em substrings
    s.replace("h", "H") // => "Hello, world": substitui todas as instâncias
    s.toUpperCase() // => "HELLO, WORLD"

### Declaração de variável
Antes de utilizar uma variável em um programa JavaScript, você deve declará-la. As variáveis são declaradas com a palavra-chave var, como segue:

    var i;
    var sum;

Também é possível declarar várias variáveis com a mesma palavra-chave var:

    var i, sum;

E pode-se combinar a declaraçào da variável com sua inicialização:

    var message = "hello";
    var i = o, j = o, k= 0;

Se não for especificado um valor inicial para uma variável com a instrução var, a variável será declarada, mas seu valor será *undefined* até que o código armazene um valor nela.


# Escopo de variável

Escopo de variável é a região do código-fonte de seu programa em que ela está definida. Uma variável global tem escopo global, está definida em toda parte do seu código, por outro lado as variáveis declaradas dentro de uma funçào ficam definidas apenas dentro do corpo da função, são * variaveis locais * e tem escopo local.

Se você declarar uma variável local ou um parâmetro de função com o mesmo nome de uma variável global, ela **efetivamente oculta a variável global*:

    var scope = "global";           // declara uma variável global
    funciton checkScope() {         
        var scope = "local";        // declara uma variável local com o mesmo nome
        return scope;               // retorna o valor local, não o global
    }

    checkScope()                    // => "local"


# Expressões e operadores
Uma expressão é uma frase de código JS que um interpretador JavaScript pode avaliar para produzir um valor, uma constante incorporada em seu programa é um tipo de expressão muito simples, nome de variável também é uma expressão simples. Expressões complexas são formadas a partir de expressões mais simples.

## Expressões primárias

São valores constantes ou liteais, certas palavras-cahve da linguagem e referências a variáveis.

Os literais são valores constantes incorporados diretamente em seu programa. São como segue:

    1.23            // Um número literal
    "hello"         // Uma string literal
    /pattern/       // Uma expressão regular literal

Algumas das palavras reservadas de JavaScript são expressões primárias:

    true        // É avaliado como o valor booleano true
    false       // É avaliado como o valor booleano false
    null        // É avaliado como o valor null
    this        // É avaliado como o objeto "atual

Por fim, o terceiro tipo de expressão primária é a referência à variável simples:

    	i           // É avaliada como o valor da variável i.
    	sum         // É avaliada como o valor da variável sum.
    	undefined   // undefined é uma variável global e não uma palavra-chave como null.

## Inicializadores de objeto e array
São expressões cujo valor é um objeto ou array recém-criado, às vezes chamadas de "objetos literais" e "array literais". Contudo ao contrário dos verdadeiros literais, elas não são expressões primárias, pois tem várias `subexpressões` que especificam valores de propriedade e elemento.

O inicializador de array é uma lista de expressões separadas com vírgulas e contidas em colchetes.

    []          // Um array vazio: nenhuma expressão dentro dos colchetes significa nenhum
                // elemento
    [1+2,3+4]   // Um array de 2 elementos. O primeiro elemento é 3, o segundo é 7

As expressões de elemento em um inicializador de array podem ser elas próprias inicializadoras de array, ou seja, essas expressões podem criar arrays aninhados:

    var matrix = [[1,2,3], [4,5,6], [7,8,9]];

Elementos indefinidos podem ser incluídos em um array literal simplesmente omitindo-se um valor entre vírgulas. Por exemplo, o array a seguir contém cinco elementos, incluindo três indefinidos:

    var sparseArray = [1,,,,5];

As expressões inicializadoras de objeto são como as expressões inicializadoras de array, mas os colchetes são substituídos por chaves e cada subexpressão é prefixada com um nome de propriedade e dois-pontos:

    var p = { x:2.3, y:-1.2 };      // Um objeto com 2 propriedades
    var q = {};                     // Um objeto vazio sem propriedades
    q.x = 2.3; q.y = -1.2;          // Agora q tem as mesmas propriedades de p

Objetos literais podem ser aninhados. Por exemplo:

    var rectangle = { upperLeft: { x: 2, y: 2 },
                    lowerRight: { x: 4, y: 5 } };

## Expressões de definição de função
Uma expressão de definição de função define uma função JavaScript e o valor de tal expressão é a função recém-definida. De certo modo, uma expressão de definição de função é uma “função literal”, da mesma maneira que um inicializador de objeto é um “objeto literal”. Normalmente, uma expressão de definição de função consiste na palavra-chave function seguida de uma lista separadacom vírgulas de zero ou mais identificadores (os nomes de parâmetro) entre parênteses e um bloco de código JavaScript (o corpo da função) entre chaves. Por exemplo

    // Esta função retorna o quadrado do valor passado a ela.
    var square = function(x) { return x * x; }

## Expressões de acesso à propriedade
É avaliada com o valor de uma propriedade de objeto ou de um elemento de array. JavaScript define duas sintaxes para acesso à propriedade:

    expressão . identificador
    expressão [ expressão ]

O primeiro estilo de acesso à propriedade é uma expressão seguida de um ponto-final e um identificador. A expressão especifica o objeto e o identificador especifica o nome da propriedade desejada.O segundo estilo de acesso à propriedade tem outra expressão entre colchetes após a primeira (o objeto ou array). Essa segunda expressão especifica o nome da propriedade desejada ou o índice do elemento do array desejado. Aqui estão alguns exemplos concretos:

    var o = {x:1,y:{z:3}};      // Um exemplo de objeto
    var a = [o,4,[5,6]];        // Um exemplo de array que contém o objeto
    o.x                         // => 1: propriedade x da expressão o
    o.y.z                       // => 3: propriedade z da expressão o.y
    o["x"]                      // => 1: propriedade x do objeto o
    a[1]                        // => 4: elemento no índice 1 da expressão a
    a[2]["1"]                   // => 6: elemento no índice 1 da expressão a[2]
    a[0].x                      // => 1: propriedade x da expressão a[0]

A sintaxe .identificador é a mais simples das duas opções de acesso à propriedade, mas note que ela só pode ser usada quando a propriedade que se deseja acessar tem um nome que é um identificador válido e quando se sabe o nome ao escrever o programa.

## Expressões de invocação
É uma sintaxe de JavaScript para chamar (ou executar) uma função ou método, ela começa com uma expressào de função que identifica a função a ser chamada, é seguida por um parêntese de abertura, uma lista separada com vírgulas de zero ou mais expressões de argumento e um parêntese de fechamento, Exemplos:

    f(0)                // f é a expressão de função; 0 é a expressão de argumento.
    Math.max(x,y,z)     // Math.max é a função; x, y e z são os argumentos.
    a.sort()            // a.sort é a função; não há argumentos.

Quando uma expressão de invocação é avaliada, a expressão de função é avaliada primeiro e depois as expressões de argumento são avaliadas para produzir uma lista de valores de argumento. Se o valor da expressão de função não é um objeto que possa ser chamado, é lançado um TypeError. Todas as funções podem ser chamadas.

## Expressões de criação de objeto
Gera um novo objeto e chama uma função (denominada construtora) para inicializar as propriedades desse objeto, as expressão de criação de objeto são como as expressões de chamada, exceto que são prefixadas com a palavra-chave `new`:

    new Object()                // Cria um objeto vazio
    new Point(x, y)             // Cria um novo objeto Point com os argumentos x e y

Se nenhum argumento é passado para a função construtora em uma expressão de criação de objeto,
o par de parênteses vazio pode ser omitido:

    new Object
    new Date

## Operador delete
delete é um operador unário que tenta excluir a propriedade do objeto ou elemento do array es-
pecificado como operando 1 . Assim como os operadores de atribuição, incremento e decremento,
delete é normalmente usado por seu efeito colateral de exclusão de propriedade e não pelo valor que retorna. Alguns exemplos:

    var o = { x: 1, y: 2};      // Começa com um objeto
    delete o.x;                 // Exclui uma de suas propriedades
    "x" in o                    // => falso: a propriedade não existe mais

    var a = [1,2,3];            // Começa com um array
    delete a[2];                // Exclui o último elemento do array
    2 in a                      // => falso: o elemento array 2 não existe mais
    a.length                    // => 3: note que o comprimento do array não muda

Aqui estão alguns exemplos de uso do operador delete

    var o = {x:1, y:2};         // Define uma variável; a inicializa com um objeto
    delete o.x;                 // Exclui uma das propriedades do objeto; retorna true
    typeof o.x;                 // A propriedade não existe; retorna "indefinido"
    delete o.x;                 // Exclui uma propriedade inexistente; retorna true
    delete o;                   // Não pode excluir uma variável declarada; retorna false.
                                // Lançaria uma exceção no modo restrito.
    delete 1;                   // O argumento não é lvalue: retorna true
    this.x = 1;                 // Define uma propriedade do objeto global a sem var
    delete x;                   // Tenta excluí-la: retorna true no modo não restrito
                                // Exceção no modo restrito. Use 'delete this.x' em vez disso
    x;                          // Erro de execução: x não está definida

# Instruções

86/104