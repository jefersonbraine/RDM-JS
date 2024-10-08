
"Developer".charAt(4)               //l
//.charAt(4) - retorna o caractere na posição 4 do string. No caso, o caractere é 'l'.

"Developer".concat("", "Role")       //DeveloperRole
//.concat("", "Role") - retorna a concatenação do string atual com o que estiver entre parênteses. No caso, "Developer" concatenado com "Role" resulta em "DeveloperRole".

"Developer".startsWith("D")         //true
//.startsWith("D") - verifica se o string começa com a string passada como parâmetro. No caso, verifica se o string começa com "D". Resultado: true.

"Developer".endsWith("r")           //true
//.endsWith("r") - verifica se o string termina com a string passada como parâmetro. No caso, verifica se o string termina com "r". Resultado: true.

"Developer".includes("v")           //true
//.includes("v") - verifica se o string contém a string passada como parâmetro. No caso, verifica se o string contém "v". Resultado: true.

"Developer".indexOf("e")            //1
//.indexOf("e") - retorna o índice da primeira aparição de "e" no string. No caso, o índice é 1.

"Developer".lastIndexOf("e")        //7
//.lastIndexOf("e") - retorna o índice da última aparição de "e" no string. No caso, o índice é 7.

"Developer".match(/[A-Z]/g)         //['D']
//.match(/[A-Z]/g) - retorna um array com as strings que matcheiam com a regex passada como parâmetro. No caso, retorna um array com a string "D".

"Developer".padStart(10, "?")       //?Developer
//.padStart(10, "?") - retorna o string com o tamanho especificado, preenchendo com o caractere especificado. No caso, o string tem 10 caracteres, e o caractere é "?".

"Developer".padEnd(12, "!")         //Developer!!!
//.padEnd(12, "!") - retorna o string com o tamanho especificado, preenchendo com o caractere especificado. No caso, o string tem 12 caracteres, e o caractere é "!"

"Developer".repeat(2)               //DeveloperDeveloper
//.repeat(2) - retorna o string repetido a quantidade de vezes especificada. No caso, o string é "Developer" e ele é repetido 2 vezes.

"Developer".replace("e", "x")       //Dxveloper
//.replace("e", "x") - retorna o string com todas as ocorrências de "e" substituidas por "x". No caso, o string é "Dxveloper".

"Developer".search("l")             //4
//.search("l") - retorna o índice da primeira aparição de "l" no string. No caso, o índice é 4.

"Developer".slice(2, 5)             //vel
//.slice(2, 5) - retorna um novo string com os caracteres entre o índice 2 e 5. No caso, o string é "vel".

"Developer".split('')               //['D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
//.split('') - retorna um array com os caracteres do string. No caso, o array é ['D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'].

"Developer".substring(3, 6)         //elo
//.substring(3, 6) - retorna um novo string com os caracteres entre o índice 3 e 6. No caso, o string é "elo".

"Developer".toLowerCase()           //developer
//.toLowerCase() - retorna o string em minúsculas.

"Developer".toUpperCase()           //DEVELOPER
//.toUpperCase() - retorna o string em maiúsculas.

"Developer".toLocaleLowerCase()     //developer
//.toLocaleLowerCase() - retorna o string em minúsculas, considerando as configurações de localidade do sistema.

"Developer".toLocaleUpperCase()     //DEVELOPER
//.toLocaleUpperCase() - retorna o string em maiúsculas, considerando as configurações de localidade do sistema.

"Developer".charCodeAt(0)           //68 (Unicode value of 'D')
//.charCodeAt(0) - retorna o valor Unicode do caractere na posição 0 do string. No caso, o valor é 68.

"Developer".codePointAt(0)          //68 (Code point value of 'D')
//.codePointAt(0) - retorna o valor Unicode do caractere na posição 0 do string. No caso, o valor é 68.

"Developer".includes("Dev")         //true
//.includes("Dev") - verifica se o string contém a string passada como parâmetro. No caso, verifica se o string contém "Dev". Resultado: true.

" Developer".trim()                 //Developer
//.trim() - remove espaços em branco do início e do final do string.

" Developer".trimStart()            //"Developer "
//.trimStart() - remove espaços em branco do início do string.

" Developer".trimEnd()              //" Developer"
//.trimEnd() - remove espaços em branco do final do string.

const str = "Hello, World!";

str.replaceAll("l", "x");                // Hexxo, Worxd!
// str.replaceAll("l", "x") - Substitui todas as ocorrências de um substring por outro. No caso, todas as letras "l" são substituídas por "x".

str.localeCompare("Hello");              // 1
// str.localeCompare("Hello") - Compara dois strings de acordo com a localidade. Retorna -1, 0 ou 1, dependendo de a string ser menor, igual ou maior, respectivamente.

str.normalize();                         // 'Hello, World!'
// str.normalize() - Retorna a forma Unicode normalizada do string.

str.search(/World/);                     // 7
// str.search(/World/) - Retorna o índice da primeira correspondência da expressão regular passada como parâmetro. No caso, retorna o índice 7.

str.replace(/World/g, "Universe");       // 'Hello, Universe!'
// str.replace(/World/g, "Universe") - Substitui as ocorrências que correspondem à expressão regular com o novo valor. No caso, "World" é substituído por "Universe".

str.matchAll(/l/g);                      // Iterator
// str.matchAll(/l/g) - Retorna um iterator com todas as correspondências da expressão regular no string.

str.big();                               // <big>Hello, World!</big>
// str.big() - Envolve o string em tags <big>. No caso, retorna '<big>Hello, World!</big>'.

str.blink();                             // <blink>Hello, World!</blink>
// str.blink() - Envolve o string em tags <blink>. No caso, retorna '<blink>Hello, World!</blink>'.

str.fixed();                             // <tt>Hello, World!</tt>
// str.fixed() - Envolve o string em tags <tt>. No caso, retorna '<tt>Hello, World!</tt>'.

str.anchor("anchorName");                // <a name="anchorName">Hello, World!</a>
// str.anchor("anchorName") - Envolve o string em uma tag <a> com o atributo name. No caso, retorna '<a name="anchorName">Hello, World!</a>'.

str.link("http://example.com");          // <a href="http://example.com">Hello, World!</a>
// str.link("http://example.com") - Envolve o string em uma tag <a> com o atributo href. No caso, retorna '<a href="http://example.com">Hello, World!</a>'.