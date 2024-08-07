# Oque é Javascript?

JavaScript é uma linguagem de programação que potencializa o comportamento dinâmico na maioria dos sites, permitindo
implementar itens complexos em páginas web.

Está presente sempre que uma página da web faz mais do que simplesmente mostrar a você informação estática, mostrando
conteúdo que se atualiza em um intervalo de tempo, mapas interativos ou gráficos 2D/3D animados, etc.

Cria conteúdo que se atualiza dinamicamente, comoa múltimidias, imagens animadas, e tudo o mais que há de interessante.
OK, não tudo, mas é maravilhoso o que se pode efetuar com algumas linhas de Código JavaScript.

Junto com HTML e CSS, é uma tecnologia central que faz a web funcionar.

## CONSOLE

O console é um painel que exibe mensagens importantes para as pessoas desenvolvedoras.
Muito do trabalho que o computador faz com o código é invisivel para nós por padrão. Se
quisermos que as coisas apareçam em nossa tela podemos imprimir ou registrar diretamente
em nosso console.

Em JavaScript, a palavra-chave **console**, se refere a um objeto, uma coleção de dados
e ações, que podemos usar em nosso código.

Uma ação ou método embutido no objeto **console** é o método `.log()`. Ao escrever 
`console.log()`, o que estiver entre os parênteses será impresso ou registrado no console.

    `console.log('Boas-vindas a essa explicação');`
-----------------------------------------------------
Terminal:

    Boas-vindas a essa explicação
-----------------------------------------------------

O método console.log() é usado para registrar ou imprimir mensagens no console, mas também
pode ser usado para imprimir objetos e outras informações.

## COMENTÁRIOS

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

Já os comentários de várias linhas são criados circundando as linhas com /* no inicio e */
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


## TIPOS DE DADOS

Os tipos de dados são as classificações dos diferentes tipos de dados usados na
programação. Em JavaScript, o mais recente padrão ECMAScript 6 define sete tipos de dados
fundamentais: **number, string, boolean, null, undefined, symbol e object.**

Seis tipos de dados são considerados tipos de dados primitivos e são os mais básicos da
linguagem:

 - Number(Número): Qualquer número, incluindo números
 com decimais: 4, 8, 1516, 23.42.

    `const quantidade = 24;
    let preco = 1.99;`

 - String: qualquer agrupamento de caracteres
 (letras, números, espaços, símbolos, etc.)
 sempre entre aspas simples '...' ou duplas "...".

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
 Variáveis que são declaradas, mas que não são inicializadas com um valor,
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

# OPERADORES ARITMÉTICOS

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

# CONCATENAÇÃO DE STRINGS

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
**String Concatenation**.

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
    console.log('Sem' + 'espaco');
    console.log('Espaço' + ' ' + 'no meio');`
--------------------------------
    Terminal:
    `Espaço no inicio
    Espaço no final
    Sem espaco
    Espaço no meio`
--------------------------------

No exemplo abaixo, várias strings e variáveis
contendo valores de string serão concatenadas.
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

# PROPRIEDADES

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

No exemplo acima, o valor salvo da propriedade `length` é recuperado da
instância da string `JavaScript`. O número 10 é impresso no console,
pois JavaScript contém 10 caracteres.

O `.` é outro operador, chamado de **operador de ponto**.

# MÉTODOS

JavaScript fornece diferentes métodos de string, ou seja,
diferentes ações que podemos realizar nas strings.

Quando usamos, isto é, **chamamos** métodos anexados a uma instância,
devemos:

 - adicinar um ponto (o operador ponto .)
 - informar o nome do método
 - abrir e fechar os parenteses.

        Ex.: ('stringExemplo'.NomeMetodo());

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

# OBJETOS EMBUTIDOS

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

Este método retorna um número **aleatório** 
**entre 0 (inclusivo) e 1 (exclusivo)**.

Para gera um número aleatório entre 0 e 50,
multiplique por 50:

    `console.log(Math.random() * 50);`
--------------------------------
    Terminal:
    `45.123456789`
--------------------------------

Para que o resultado seja um **número inteiro**
e não um decimal, pode-se usar outro método
chamado **Math.floor(), que arredonda** para
baixo para o número inteiro mais proximo:

    `console.log(Math.floor(Math.random() * 50));`
--------------------------------
    Terminal:
    `45`
--------------------------------

O método `Math.ceil()` retorna o menor número inteiro maior ou igual a "x".

    Math.ceil(0.95);
--------------------------------
    Terminal:
    `1`
--------------------------------

    Math.ceil(4);
--------------------------------
    Terminal:
    `4`
--------------------------------
    Math.ceil(-0.95);
--------------------------------
    Terminal:
    `0`
--------------------------------

 O método `isInteger()` retorna `true` se o número for inteiro e `false` se o número for decimal.

    Number.isInteger(value)
--------------------------------
    Number.isInteger(0);
--------------------------------
    Terminal:
    `true`
--------------------------------
    Number.isInteger(0.1);
--------------------------------
    Terminal:
    `false`

---------------------------------------------------------------------------------------------------------


# O QUE SÃO VARIÁVEIS?

Variáveis são objetos que rotulam e armazenam dados
na memória do computador.

**Pense em variáveis como pequenas caixas que guardam** 
**informações**. Tais informações podem ser **o nome de**
**uma pessoa usuária, número de telefone ou mesmo uma mensagem de saudação**,
ou seja, qualquer tipo de dado seja ele **string, número ou booleano**.

![variavel](./images/var-1.png)

Por rotular, entende-se nomear descritivamente os dados, facilitando
a leitura e entendimento por outras pessoas e nós mesmos.

    `var pessoaUsuaria = 'Maiara';`

    `var idade = 23;`

    `var programando = true;`

# CRIANDO UMA VARIÁVEL: var

A palavra-chave `var` foi usada em todo o código JavaScript de 1995 a 2015, quando
a versão ECMAScript 6 (ES6) introduziu duas novas palavras-chaves para declarar variáveis:
`let` e `const`.

Até então, as pessoas programadores só podiam usar `var`para declarar variáveis.

Atualmente, se você quiser que seu código seja executado em um navegador mais antigo, você
deve usar `var`.

    `var pessoaUsuaria = 'Maiara';
    console.log(pessoaUsuaria);`
--------------------------------
    Terminal:
    `Maiara`
--------------------------------

`var`, abreviação de `variável`, é uma palavra-chave JavaScrpt que declara (cria) uma nova variável;

`pessoaUsuaria`, é o nome da variável. A escrita dessa maneira, onde agrupa-se as palavras em
uma e a primeira palavra é minuscula, e cada palavra que segue tem a primeira letra maiuscula
é uma convenção padrão em JavaScript chamada camel casing (caixa de camelo). 
Outro exemplo: `camelCaseExemplo;`

`=` é o operador de atribuição que atribui(recebe) o valor `('Maiara')` a variável `(pessoaUsuaria);

`'Maiara'` é o valor atribuido `(=)` à variável `pessoaUsuaria`. foi inicializada com o 
o valor de `'Maiara'`.

Após a declaração da variável, o valor da string `Maiara` é impresso no console
utilizando como referência o nome da variável, assim:
`console.log(pessoaUsuaria).`

Existem regas para nomear variáveis:

 - Os nomes das variáveis não podem começar com números;

 - Os nomes das variáveis diferenciam maiscula e minúsculas
 portanto, `pessoaUsuaria` é diferente de `pessoausuaria`.
 Não é uma boa prática criar duas variáveis com o mesmo nome
 utilizando maiúsculas e minúsculas em situações diferentes.

 - Os nomes das variáveis não podem ser iguais às palavras-chave do JavaScript.

# CRIANDO UMA VARIÁVEL: let

A palavra-chave `let` foi introduzida em 2015 na versão ECMAScript 6 (ES6) e sinaliza
que a **variável pode ser reatribuida com um valor diferente**. Por exemplo:

    `let almocoSabado = 'Feijoada';
    console.log(almocoSabado);

    almocoSabado = 'Churrasco';
    console.log(almocoSabado);`
--------------------------------
    Terminal:
    `Feijoada`
    `Churrasco`
--------------------------------

Outro ponto que deve-se observar ao utilizar `let` (e até `var`) é que é possivel declarar
uma variável sem necessariamente atribuir a ela um valor. Dessa forma, a variável será
inicializada como um valor `undefined`. Exemplo:

    `let diaDaSemana;
    console.log(diaDaSemana);

    diaDaSemana = 'Sabado';
    console.log(diaDaSemana);`
--------------------------------
    Terminal:
    `undefined`
    `Sabado`
--------------------------------

No exemplo, inicialmente não foi atribuido um valor à variável `diaDaSemana` e ela
automaticamente inicializou com um valor `undefined`. Em seguida, atribuiu-se o valor
`'Sábado'` a variável.

# CRIANDO UMA VARIÁVEL: const

A palavra-chave `const` também foi introduzida em 2025 na versão ECMAScript 6 (ES6) e 
é uma abreviação da palavra **constante**.

Assim como `var` e `let` também armazenam qualquer valor em uma variável.
A declaração de uma variável `const` segue a mesa estrutura das demais.
Observe abaixo:

    const pessoaUsuaria = 'Bia';
    console.log(pessoaUsuaria);
--------------------------------
    Terminal:
    `Bia`
--------------------------------

A diferença é que a variável `const` não poder ser reatribuida porque é constante.
Ao tentar reatribuir uma variável `const`, obtem-se um `TypeError`.

    const quantidadeDias = 20;
    console.log(quantidadeDias);

    quantidadeDias = 30;
    console.log(quantidadeDias);
--------------------------------
    Terminal:
    `20`
    `TypeError: Assignment to constant variable.`
--------------------------------

Além disso, as variáveis constantes devem receber um valor quando são declaradas.
Ao tentar declarar uma variável `const` sem um valor, obtem-se um `SyntaxError`.

    const quantidadeDias;
    console.log(quantidadeDias);
--------------------------------
    Terminal:
    `ReferenceError: quantidadeDias is not defined`
--------------------------------

Para decidir-se entre qual palavra-chave usar, `let` ou `const`, **pense se**
**será necessário reatribuir um valor à variável no futuro**. Se for preciso
reatribuir a variável `let`, caso contrário, use `const`.

# OPERADORES DE ATRIBUIÇÃO  

Observe como é possível usar variáveis e operadores matemáticos para
calcular novos valores e atribuílos a uma variável:

    let ano = 2021;
    ano = ano + 1;

    console.log(ano);
--------------------------------
    Terminal:
    `2022`
--------------------------------

No exemplo, foi declara a variável `ano` com o número 2021, atribuída a ela.
Na linha seguinte `ano = ano + 1`, aumentando o valor de ano para 2022.

Outra forma de reatribuir `ano`é utilizar operadores de atribuição matemática
embutidos. Pode-se reescrever o código acima da seguinte maneira:

    let ano = 2021;
    ano += 1;

    console.log(ano);
--------------------------------
    Terminal:
    `2022`
--------------------------------

O operador de atribuição embutido `+=` foi utilizado para reatribuir `ano`,
sendo realizada a operação matemática de soma do primeiro operador `+`
com o número à direita e, em seguida, reatribuindo `ano` ao valor calculado.

Estes são outros operadores de atribuição matemática que funcionam de forma
semelhante: `-=, *= e /=`.

    let a = 30;
    a -= 12; // o mesmo que a = a - 12;

    console.log(a);
--------------------------------
    Terminal:
    `18`
--------------------------------

    let b = 24;
    b *= 3; // o mesmo que b = b * 3;

    console.log(b);
--------------------------------
    Terminal:
    `72`
--------------------------------

    let c = 120;
    c /= 2; // o mesmo que c = c / 2;

    console.log(c);
--------------------------------
    Terminal:
    `60`
--------------------------------

# INCREMENTO E DECREMENTO

Dentre os operadores de atribuição matemática inclue-se o operador de incremento
`(++)` e decremento `(--)`.

Observe que o operador de incremento aumenta o valor da variável em 1:

    let alpha = 35;
    alpha++;

    console.log(alpha);
--------------------------------
    Terminal:
    `36`
--------------------------------

Já o operador de decremento diminui o valor da variável em 1:

    let beta = 49;
    beta--;

    console.log(beta);
--------------------------------
    Terminal:
    `48`
--------------------------------

Assim como os demais operadores de atribuiçào matemáticos `(+=, -=, *= e /=)`,
o **valor da variável é atualizado e atribuido como o novo valor dessa variável**.

# CONCATENAR STRINGS E VARIÁVEIS

O operador `+` tabém pode ser usado para combinar dois valores de string, ainda que
esses valores estiverem sendo armazenados em variáveis. Veja a seguir:

    let appFavorito = 'Insta';

    console.log('Uso muito o ' + appFavorito + '!');
--------------------------------
    Terminal:
    `Uso muito o Insta!`
--------------------------------

O valor `Insta` foi atribuido à variável `appFavorito`.	

Em seguida o operador `+` foi usado para combinar três strings: `'Uso muito o '`, 
o valor salvo em `appFavorito` e `'!'`.

Por fim, o valor final da concatenaçào foi registrado no console.


# INTERPOLAÇÃO DE STRINGS

É possivel inserir ou interpolar variáveis em strings usando literais de modelo
(template literals).

Observe no exemplo abaixo como um literal de modelo é usado para registrar strings juntas:

    let appFavorito = 'Insta';

    console.log(`Uso muito o ${appFavorito}!`);
--------------------------------
    Terminal:
    `Uso muito o Insta!`
--------------------------------

 - Um literal de modelo é envolvido por crases ` `` `.

 - Dentro do literal do modelo, há um espaço reservado
 `${appFavorito}`. O valor de `appFavorito` é inserido no literal do modelo.

 **O maior benefício de usar literais de modelo é a legibilidade do código**, facilitando
 identificar qual será a nova string, Além disso, não é necessário preocupar-se com a combinação
 de aspas duplas ou aspas simples.

 # OPERADOR TYPEOF

 O operador typeof verifica o valor à sua direita e retorna (devolve)
 uma string do tipo de dados.

 Por vezes pode ser útil controlar os tipos de dados variáveis no código.

 Caso seja preciso verificar o tipo de dado do valor de uma variável,
 utilize o operador **typeof**

    const pessoaUsuaria = 'Jamile';
    console.log(typeof.pessoaUsuaria);
--------------------------------
    Terminal:
    `string`
--------------------------------

    const idade = 27;
    console.log(typeof idade);
--------------------------------
    Terminal:
    `number`
--------------------------------

    const programando = true;
    console.log(typeof programando);
--------------------------------
    Terminal:
    `boolean`
--------------------------------

# DECLARAÇÕES CONDICIONAIS

Todos os dias, a todo momento, tomamos decisões com base em circusntâncias que
afetam nossas vidas.

Pense por exemplo, que se uma pessoa está com fome, deverá comer um hambúrguer.
Caso contrário comer depois.

![declarar condicional](./images/dec-1.png)


As declarações condicionais permitem representar tomadas de decisão como esta
em JavaScript, a partir da escolha que deve ser feita, como "comer hambúrguer" ou
"comer depois".

Essas decisões chamadas de if ... else ( se ... senão ) podem ser tomadas 
em código por meio da criação de instruções condicionais.

Uma instrução condicional verifica uma ou mais condições específicas e executa uma tarefa
com base na condição ou nas condições, caso seja mais de uma.

## Sintaxe básica if ... else

Veja a sintade básica de `if...else` no pseudocódigo:

    `if (condicao) {
        codigo para executar caso a condição seja verdadeira;
    } else {
        senão, executar este código
    }`

### Aqui nós temos:

 1. A palavra reservada `if`seguida de uma condiçãp em parênteseses.

 2. Um teste condicional, localizado dentro dos parênteses.
 (normalmente "este valor é maior que esse", ou "este valor existe"). Esta condição pode fazer uso
 dos operadores de comparação: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`,  e podem retornar
 `true` ou `false`.	

 3. Um par de chaves, e dentro dele temos código -- pode ser qualquer código que queiramos,
 e só vai ser executado se o teste condicional retornar `true`.

 4. A palavra reservada `else`.

 5. Outro par de chaves, dentro dele temos mais um pouco de código -- pode ser qualquer código que queiramos,
 e só vai executar se o teste condicional retornar um valor diferente de `true`, neste caso `not true`, ou `false`.

Este tipo de código é bem legível por seres humanos -- ele diz: **if** a condição for `true`, execute o bloco de código A, **else** 
execute o bloco de código B. (**se** a condição for **verdadeira**, execute o bloco de codigo A, **senão** execute o bloco de codigo B).


### Exemplo:

Para entender bem a sintaxe, vamos considerar um exemplo real. Imagine um filho sendo chamado pra ajudar com as tarefas
do Pai ou da Mãe. Os pais podem falar: "Ei querido, se você me ajudar a ir fazer as compras, eu te dou uma grana extra
para que você possa comprar aquele brinquedo que você quer". Em JavaScript, podemos representar isso como:

    `var comprasFeitas = false;

    if (comprasFeitas === true) {
        var granaFilho = 100;
    } else {
        var granaFilho = 50;
    }`

Esse código como mostrado irá sempre resultar na variável `comprasFeitas`retornando `false`, sendo um
desapontamento para nossas nossas pobres crianças, Cabe a nós fornecer um mecanismo para o pai
definir a variável `comprasFeitas`como `true` se o filho fez as comrpas.

### else if

O último exemplo nos forneceu duas opções ou resultados - mas e se quisermos mais do que dois?

Existe uma maneira de encadear escolhas/resultados extras ao seu `if...else` --- usando `else if`. 
Cada escolha extra requer um bloco adicional para colocar entre `if() {...}` e `else {...}` -- confira
o seguinte exemplo mais envolvido, que pode fazer parte de um aplicativo simples de previsão do tempo:

`HTML

<label for="wheater">Select the weather type today</label>
<select id="wheater">
    <option value="">--Make a choice--</option>
    <option value="sunny">Sunny</option>
    <option value="rainy">Rainy</option>
    <option value="snowing">Snowing</option>
    <option value="overcast">Overcast</option>
</select>

<p></p>
`

`JS

    var select = 
    document.querySelector("select");
    var para = 
    document.querySelector("p");

    select.addEventListener("change", setWeather);

    function setWeather() {
        var choice = select.value;

        if (choice === "sunny") {
            para.textContent = "Today is sunny!";
        } else if (choice === "rainy") {
            para.textContent = "Today is rainy!";
        } else if (choice === "snowing") {
            para.textContent = "Today is snowing!";
        } else if (choice === "overcast") {
            para.textContent = "Today is overcast!";
        } else {
            para.textContent = "";
        }
    }

1. Aqui temos um elemento HTML `<select>` que nos permite fazer escolhas de clima
diferentes e um simples parágrafo.

2. No JavaScript, estamos armazenando uma referência para ambos os elementos
`<select>` e `<p>` e adicionando um **listener** de evento ao elemento `select`,
para que, quando o valor for alterado, a função `setWeather` seja executada.

3. Quando esta função é executada, primeiro definimos uma variável chamada `choice`,
para o valor atual selecionado no elemento `select`. Em seguida, usamos uma
instruçào condicional para mostrar um texto diferente dentro do parágrafo,
dependendo de qual é o valor de `choice`. Observe como todas as condições
são testadas nos blocos `else if() {...}`, com exceção do primeiro, que 
é testado em um bloco  `if() {...}`.

4. A última escolha, dentro do bloco `else{...}`, é basicamente uma opções de "último recurso" --- o 
código dentro dele será executado se nenhuma das condições anteriores forem `true`. Nesse caso, ele
serve para esvaziar o texto do parágrafo, se nada for selecionado, por exemplo, se um usuário decidir
selecionar novamente a opção de espaço reservado "--Make a choice--" mostrada no inicio.


# DECLARAÇÃO if

Constantemente decidimos realizar uma tarefa tendo como base uma condição: se estiver frio,
vou usar uma blusca; se chover, levo um guarda-chuva; se estiver com sono, durmo.

Ao programar, também é possivel realizar uma tarefa baseando-se em uma condição.
Para isso, utiliza-se a instrução `if`:

    if (true) {
        console.log('Vou usar uma blusa');
    }
--------------------------------
    Terminal:
    `Vou usar uma blusa`
--------------------------------

No exemplo:

A palavra-chave `if` é seguida por um conjunto de parênteses () que é seguido por um bloco de código,
ou instrução de bloco, indicada por um conjunto de chaves {}.

dentro dos parênteses (), é fornecida uma condição que avalia para `true`ou `false`.

se a condição for avaliada como `true`, o código dentro das chaves {} é executado.

se a condição for avaliada como `false`, o código dentro das chaves {} não é executado.

    if (false) {
        console.log('Vou usar uma blusa');
    }
--------------------------------
    Terminal:

--------------------------------   

# DECLARAÇÃO If ... Else

Sabe-se que uma instrução `if` permite verificar uma condiçào e decide se um bloco de código deve
ser executado quando a condição é avaliada como `true`.

Em alguns casos, pode ser que queiramos que um outro bloco de código seja executado, caso a condição seja avaliada como `false`.

Para adicionar um comportamento padrão à instrução `if`, adicione uma instrução `else`para executar um bloco de código quando a
condição for avaliada como `false`.

observe o exemplo:

    if (false) {
        console.log('Vou usar uma blusa');	
    } else {
        console.log('Não preciso da blusa');
    }
--------------------------------
    Terminal:
    `Não preciso da blusa`
--------------------------------

Uma declaração `else`deve ser utilizada como complemento à uma declaração `if` e, juntas
são chamadas de declaração `if ... else`.

No exemplo:

 - A palavra-chave `else` foi adicionada após o bloco de código de uma instrução `if`.

 - Possui um bloco de código que é envolvido por um conjunto de chave `{ }`.	

 - O código dentro do bloco de código da instrução `else`foi executado quando a condição da instrução `if`
 foi avaliada como `false`.

Declarações `if ... else`permitem automatizar soluções para decisões binárias, como por exemplo,
**perguntas de sim ou não**.

# OPERADOS DE COMPARAÇÃO

Utiliza-se operadores de comparação quando é preciso comparar valroes ao escrever declarações condicionais.

Alguns operadores de comparaçào e suas sintaxes são:

 - menor que: <
 - maior que: >
 - igual a: ==
 - Exatamente igual a: ===
 - diferente de: !=
 - maior ou igual a: >=
 - menor ou igual a: <=

Os operadores de comparação comparam o valor à esquerda com o valor à direita. Por exemplo:

    100 > 50 // true

Declarações de comparação podem ser entendidas como perguntas. Quando a resposta for "sim",
a afirmação avaliada para `true`, e quando a resposta for "não", a afirmação avaliada para `false`.

O exemplo acima teria como pergunta: `100` é maior que `50`? Sim, portando `100 > 50` é avaliado como `true`.

É possível usar operadores de comparação em diferentes tipos de dados, comos trings:

    'suco' == 'refrigerante' // false

O operadores de identidade `(==)` verifica se a string `'suco'`é igual à string `'refrigerante'`.
Como as duas strings não são iguais, a instruçào de comparação avalia como `false`.

Todas as declarações de comparação avaliam `true` ou `false` e são compostas de:

 - Dois valores que serão comparados.
 - Um operador que separa os valores e os compara (>, <, <=, >=, ===, e !==).

# OPERADORES LÓGICOS

Em JavaScript, os operadores lógicos adicionam uma lógica mais sofisticada às condicionais,
isto é, quando utilizamos valores booleanos, `true` ou `false`.

Há três tipos de operadores lógicos:

 - Operador **e** `(&&)`: Retorna `true`se ambas as condições forem avaliadas como `true`.
 - Operador **ou** `(||)`: Retorna `true`se pelo menos uma das condições forem avaliadas como `true`.
 - Operador **not**, também conhecido como operador *bang* `(!)`: Retorna `true`se a condição for avaliada como `false`.

Para verificar se dois elementos são `true`, utiliza-se o operador `&&`:

    if (clima === 'chuvoso' && temperatura  15){
        console.log('Use um casaco impermeável!`);
    } else {
        console.log('Use apenas um suéter.');
    }

O operador `&&` verifica ambas as condições que devem ser avaliadas como `true` para que toda a condiçào seja avaliada como `true` e,
assim, executar o bloco de código `if`.

Caso uma das condições seja avaliada como `false`, a condição `&&` também será avaliada como `false`e o bloco de código `else` será executado.

Se apenas uma das duas condições precisar ser avaliada como `true`, utilize o operador `||`.

    if (nome === 'Ana' || nome === 'ana) {
        console.log('Boas-vindas, Ana!');
    } else {
        console.log ('Boas-vindas, ' + nome + '!');
    }

Ao usar o operador ` || `, apenas uma das condições deve ser avaliada como `true` para que a instrução geral também seja avaliada como `true`.

No exemplo, se `nome === 'Ana'` ou `nome === 'ana'` for avaliada como true, a condição `if` será avaliada como `true` e seu bloco de código será executado.

Se a primeira condição em uma instrução `||` for avaliada como `true`, a segunda condição nem mesmo será verificada. Somente se `nome === 'Ana'` for avaliada como `false`
é que `nome === 'ana'` será verificada.

O bloco de código na instrução `else`será executado somente se ambas as comparações em `if`forem avaliadas como `false`.


O operador not `(!)` inverte ou nega um valor booleano:

    let programando = false;
    console.log(!programando);
--------------------------------
    Terminal:
    `true`
--------------------------------

    let sonolento = true;
    console.log(!sonolento);
--------------------------------
    Terminal:
    `false`
--------------------------------

O operador `!` inverte um valor `true`para `false`, e um valor `false` para `true`.

Outra camada de lógica é adicionada ao código quando operadores lógicos são utilizados em
declarações condicionais.

# VALORES VERDADEIROS OU FALSOS

Tipos de dados não booleanos, como strings ou números, também podem ser avaliados quando verificados em uma condição.

Por vezes é necessário apenas verificar se há um valor na variável e não necessariamente verificar se esse valor é igual a um valor
especifico.

Ela deverá apenas ter um valor, seja ele qual for, em outras palavaras, é necessário apenas verificar se a variável recebeu um valor.

    let verificarValor = 'Aqui existe um valor!';	


    if (verificarValor){
        console.log(verificarValor);
    } else {
        console.log('Não existe um valor!');
    }
--------------------------------
    Terminal:
    `Aqui existe um valor!`
--------------------------------

O bloco de código na instrução `if`foi executado por `verificarValor` tem um valor verdadeiro.

Mesmo que o valor de `verificarValor` não seja explicitamente o valor `true`, quando usado em um contexto
booleando ou condicional, ele é avaliado como `true` porque foi atribuído um valor não falso.

Então, quais valores são falso - ou avaliado como `false` - quando verificados como uma condição?

A lista de valores falsos inclui:

 - `0` (zero)
 - strings variaz como " " ou ' '
 - `null` (nulo) quando não há valor algum
 - `undefined` (indefinido) quando há uma variável é declarada sem valor
 - `NaN` (not a number) ou não é um número
 - `false`

Observe um exemplo com o número `0`:

    let pessoasNaSala = 0;


    if (pessoasNaSala) {
        console.log('Manter a sala aberta');
    } else {
        console.log('Fechar a sala');
    }
--------------------------------
    Terminal:
    `Fechar a sala`
--------------------------------

A condição é avaliado como `false`porque o valor de pessoasNaSala é `0`. Como `0` é um valor falso, o bloco de código na instrução `else` será executado.

# ATRIBUIÇÃO DE VERDADE OU FALSO

Numa situação, por exemplo, em que seja preciso saudar uma pessoa usuária de forma
personalziada utilizando seu nome, mas com a possibilidade dela ainda não ter uma conta
tornando o `nomeUsuario` uma variável falsa, avaliações verdaderias e falsa (truthy and falsy)
simplificam bastante as coisas.

Obsever no código abaixo como seria na prática. Ele verifica se `nomeUsuario` foi definido,
e caso nenhum valor tenha sido fornecido, atribui uma string padrão.

    let nomeUsuario = '';
    let nomePadrao;

    if (nomeUsuario){
        nomePadrao = nomeUsuario;
    } else {
        nomePadrao = 'novo usuário';
    }

    console.log(nomePadrao);
--------------------------------
    Terminal:
    `novo usuário`
--------------------------------

É possivel abreviar o código acima utilizando o operador lógico `||` em uma condição booleana:

    let nomeUsuario = '';
    let nomePadrao = nomeUsuario || 'novo usuário';

    console.log(nomePadrao);
--------------------------------
    Terminal:
    `novo usuário`
--------------------------------

A instrução `||` verificou a condição do lado esquerdo primeiro. Como o valor de `nomeUsuario`(`if`) foi atribuido como `false` (`''`), a instrução
`else`com `'novo usuário'` foi avaliada como `true`e executada.

Este conceito também é conhecido como avaliação de curto-circuito. (Short Circuit Evaluation)

# OPERADOR TERNÁRIO

Com uma sintaxe abreviada que simplifica uma instrução `if ... else `, o operador ternário é como um atalho.

Veja a declaração `if ... else` a seguir:

    let noite = true;

    if(noite){
        console.log('Acender as luzes.');
    } else {
        console.log('Apagar as luzes.');
    }
--------------------------------
    Terminal:
    `Acender as luzes.`
--------------------------------

Utilizando o operador ternário, é possível escrever o mesmo
código de forma simplificada mantendo a mesma funcionalidade. Observe:

    let noite = true;

    noite ? console.log ('Acender as luzes.') 
    : console.log('Apagar as luzes.');
--------------------------------
    Terminal:
    `Acender as luzes.`
--------------------------------

 - A condição `noite` foi fornecida antes de `?`.

 - Duas expressões segue o `?` e são separadas por dois pontos : .

 - Se a condição for avaliada como `true`, a primeira expressão será executada.

Assim como as declarações `if ... else` , os operadores ternários são usados em condições
para avaliar valores como `true` ou `false`.

# DECLARAÇÕES Else If

É possível adicionar mais condições `if ... else` com uma declaração `else if`.

A declaração `else if` permite mais de dois resultados possíveis, criando condicionais
mais complexas com quantas instruçòes `else if` forem necessárias.

A declaração `else if` sempre vem depois da declaração `if`e antes da declaração `else`.

A declaração `else if` também exige uma condição. Veja a sintaxe:

    let clima = 'Nublado';

    if (clima === 'chuvoso') {
        console.log('🌧️');
    } else if (clima === 'nublado') {
        console.log('☁️');
    } else if (clima === 'Sol com nuvens') {
        console.log('⛅');
    } else (clima === 'Ensolarado') {
        console.log('☀️');
    }
--------------------------------
    Terminal:
    `☁️`
--------------------------------

As declarações else if permite vários resultados possíveis.

Instruções `if/ else if/` else são lidas de cima para baixo, então a primeira condição avaliada como true de cima para baixo
é o bloco que será executado.

No exemplo, uma vez que clima === 'Chuvoso'
foi avaliado como false e clima ==== 'Nublado'
avaliado como true, o código dentro da primeira instrução `else if` foi executado.

As demais condições não foram avaliadas.

Caso nenhuma das condições fosse avaliada como true, o código da instrução else teria sido executado.


# SWITCH

Ao programar, por vezes é necessário verificar vários valores e lidar com cada um de maneira diferente, sendo as declarações `else if`
excelentes para situações assim. Veja:


    let estacao = 'Verao';


    if (estacao === 'Primavera') {
        console.log ('É primavera! As flores estão brotando');
    } else if (estacao === 'Outono') {
        console.log ('É outono! O inverno está a caminho');
    } else if (estacao === 'Verao') {
        console.log ('É verao! Está quente e ensolarado');
    } else {
        console.log ('Não é essa estação?');
    }
--------------------------------
    Terminal:
    `É verao! Está quente e ensolarado`
--------------------------------

Temos uma série de condições verificando um valor que corresponda à variável `estacao`.

O código funciona bem, mas imagine se fosse preciso verificar 100 valores diferentes?

Ter que escrever tantos declarações `else if` seria **contraprodutivo**.

Uma instrução `switch` fornece uma sintaxe alternativa que é mais fácil de ler e escrever.

A declaração `switch` é escrita da seguinte maneira:


    let estacao = 'Verao';


    switch (estacao) {
        case 'Primavera':
            console.log ('É primavera! As flores estão brotando');
            break;
        case 'Outono':
            console.log ('É outono! O inverno está a caminho');
            break;
        case 'Verao':
            console.log ('É verao! Está quente e ensolarado');
            break;
        default:
            console.log ('Não é essa estação?');
            break;
    }
--------------------------------
    Terminal:
    `É verao! Está quente e ensolarado`
--------------------------------

A palavra-chave `switch` inicia a instrução e é seguida por `(...)`, que contém o valor que cada
`case`irá comparar. No exemplo, o valor ou expressão da instrução `switch` é `estacao`.

Dentro do bloco `{...}`, existem vários `cases`.

A palavra-chave `case` verifica se a expressão corresponde ao valor especificado que vem depois dela.

 O valor após o primeiro `case`é `'Primavera'`.
 Se o valor de estacao fosse igual a `'Primavera'`, o console.log() do `case` seria executado.

 O valor de estacao é `'Verao'`, portando, o terceiro `case` foi executado e `É verao! Está quente e ensolarado` foi exibido no console.

A palavra-chave `break` diz ao computador para sair do bloco e não executar mais nenhum código ou verificar qualquer outro `case`dentro do bloco de código.

Sem a palavra-chave `break`, o primeiro `case` correspondente será executado, mas o mesmo acontecerá com todas os `cases`subsequentes,
independentemente de haver correspondência ou não - incluindo o `default`.

Esse comportamento é diferente de instruções `if ... else` em condicionais que executam apenas um bloco de código.

Ao final de cada declaração `switch`, há uma declaração `default`. Se nenhum dos `cases`for verdadeiro`, o código da instrução `default` será executado.


# O QUE SÃO FUNÇOES?	
 
Uma função é um bloco de código reutilizável que agrupa uma sequência de instruções para executar uma tarefa específica
ou calcular um valor.

Pense que para calcular a área de um retângulo há uma sequência de etapas para chegar na resposta correta:

 1. Medir a largura do retângulo.
 2. Medir a altura do retângulo.
 3. Multiplicar a largura pelo valor da altura.

![funções](./images/fun-1.png)

Assim, é possivel calcular a área do retângulo acima com o seguinte código:

    const largura = 17;
    const altura = 8;
    const area = largura * altura;

    console.log(area);
--------------------------------
    Terminal:
    `136`
--------------------------------

Agora, imagine se for preciso calcular a área de três retângulos diferentes.

![funções](./images/fun-2.png)

    //área do retângulo 1
    const largura1 = 12;
    const altura1 = 3;
    const area1 = largura1 * altura1;

    console.log(area1);
    
    //área do retângulo 2
    const largura2 = 9;
    const altura2 = 6;
    const area2 = largura2 * altura2;

    console.log(area2);

    //área do retângulo 3
    const largura3 = 14;
    const altura3 = 7;
    const area3 = largura3 * altura3;

    console.log(area3);
--------------------------------
    Terminal:
    `36`
    `54`
    `98`
--------------------------------

Em vez de reescrever o mesmo código ao programar deve-se criar um código para realizar uma tarefa
específica várias vezes.

Assim, é possível agrupar um bloco de código e associá-lo a uma tarefa, e então reutilizar esse 
bloco de código sempre que for preciso realizar a tarefa novamente.

Para isso cria-se uma função, isto é, um bloco de código reutilizável que agrupa uma
sequência de instruções para realizar uma tarefa específica.

# DECLARAÇÕES DE FUNÇÕES

Existem diferentes maneiras de criar funções em JavaScript. Uma delas é a declaração de função.

Assim como uma declaração de variável, uma declaraçào de função associa uma função a um nome ou
identificador.

Conheça a anatomia de uma declaração de função:

![funções](./images/fun-3.png)

 1. A palavra-chave `function`.
 2. Identificador seguido por parênteses
 3. corpo da função entre chaves

Uma declaraçào de função é uma função associada
a um identificador ou nome.

# CHAMANDO UMA FUNÇÃO

A declaração de função vincula uma função a um identificador.

Todavia, uma declaração de função não diz que o código dentro do corpo da função deve ser
executado, apenas declara a existência da função.

O código dentro do corpo de uma função é executado quando a função é chamada.

O nome da função deve ser seguido por parênteses () para chamar uma função no código.

![call function](./images/fun-4.png.png)

A chamada de função executa o corpo da função ou todas as instruções entre as chaves 
na declaração da função.

    function horaDeAcordar() {
        console.log(`bom dia! ☀️`);
    }

    horaDeAcordar();
--------------------------------
    Terminal:
    `bom dia! ☀️`
--------------------------------

É possivel chamar a mesma função quantas vezes forem necessárias.

# PARAMETROS E ARGUMENTOS

Algumas funções podem receber entradas e usar as entradas para realizar uma tarefa.

Ao declarar uma função, é possivel especificar seus parâmetros.

Os parâmetros permitem que as funções aceitem a(s) entrada(s) e executem uma tarefa usando a(s) entrada(s).

Parâmetros são como espaços reservados para informações que serão passadas para a função
quando ela for chamada.

Observe como especificar parâmetros em uma declaração de função:	

![alt text](./images/fun-5.png)


 1. Parâmetros
 2. Parâmetros tratados como variáveis.

`calcularArea()`calcula a área de um retângulo com base em duas entradas: `largura` e `altura`.

Os parâmetros são especificados entre parênteses como `largura` e `altura`, e dentro do corpo
da função eles agem como variáveis regulares.

`largura` e `altura` atuam como substitutos de valores que serão multiplicados juntos.

Ao chamar uma função que possui parâmetros, deve-se especificar os valores entre parênteses
que seguem o nome da função.

Os valores que são passados para a função quando ela é chamada são chamados de argumentos.
Os argumentos podem ser passados para a função como valores ou variáveis.

![argumentos](./images/fun-6.png)

Na chamada de função `calcularArea()` acima, o número `17` foi passado como `lagura` e `8`
foi passado como `altura`.	

Atente-se pois a ordem em que os argumentos são passados e atribuidos segue a ordem em que
os parâmetros são declarados.

![altura e largura](./images/fun-7.png)

As variáveis retLargura e reAltura foram inicializadas com os valores de altura e largura,
de um retângulo antes de serem usadas na chama de função,

Usando parâmetros, calcularArea() pode ser reutilizado para calcular a áea de qualquer retângulo!

Funções são uma ferramente poderosa na programção de computadores.

# PARÂMETROS PADRÃO

Parâmetro padrão é um dos recursos adicionados no ES6 e que permite que os parâmetros tenham um valor
predeterminado no caso de nenhum argumento ser passado para a função ou se o argumento for
`undefined` quando chamado.

Observe o snippet (trecho) de código abaixo que usa um parâmetro padrão:

    function saudacao (nome = 'novo usuario') {
        console.log(`olá, ${nome}!`);
    }

    saudacao('Yoshi');
    saudacao();
--------------------------------
    Terminal:
    olá, Yoshi!
    olá, novo usuario!
--------------------------------

 - O operadores `=` atribuiu ao parâmetro `nome` um valor padrão de `'novo usuario'`.

 - Quando o código chamado `saudacao('Yoshi') o valor do argumento é passado e
 'Yoshi' substitui o parâmetro padrão de `'novo usuario'` para registrar `olá, Yoshi!` no
 console.

 - Quando não é passado um argumento para `saudacao(), o valor padrão de `novo usuario` é usado e
 `olá, novo usuario!` é registrado no console.

Em situações em que um argumento não é passado para uma função que está esperando um argumento, 
utilizamos um parâmetro padrão.

# RETONAR (RETURN)

O código de uma função é executado e avaliado por padrão como ` undefined`quando uma função é chamada.

    function areaRetangulo (largura, altura) {
        let area = largura * altura;
    }

    console.log(areaRetangulo(17, 8));
--------------------------------
    Terminal:
    undefined
--------------------------------

No exemplo, foi definida uma função para calcular `area` com parâmetros de `largura` e `altura`.

Em seguida, `areaRetangulo()` foi chamada com os argumentos `17` e `8`. Porém, o resultado 
registrado foi `undefined`.

A Função não está errada. Ela funcionou bem e a área foi calculada como `136`, só que o valor 
não foi capturado e retornado.

Para retornar o valor do cálculo devemos usar a palavra-chave `return`.

![retornar valor](./images/fun-8.png)

 1. A palavra-chave `return`.
 2. Valor a ser retornado.

Para passar de volta informações da chamada de função, utiliza-se uma instrução de retorno.

Para criar uma instrução de retorno, utiliza-se a palavra-chave `return` seguida pelo valor
que deve ser retornado. Se o valor for omitido, ele vai retornar `undefined`.	

Quando uma instrução `return` é usada no corpo de uma função, a execução é interrompida
e o códdigo que a segue não será executado:

    function areaRetangulo(largura, altura) {
        if (largura < 0 || altura < 0) {
            return 'Os números devem ser inteiros positivos para calcular a área!';
        }
        return largura * altura;
    }

Se o argumento para `largura` ou `altura`for menor que `0`, `areaRetangulo()` retornará
a string `'Os números devem ser inteiros positivos para calcular a área!'`.

A segunda instrução do retorno `largura * altura` não será executada.

A palavra-chave `return`permite que funções produzam uma saída que pode, inclusive, 
ser salva em uma variável para uso posterior.