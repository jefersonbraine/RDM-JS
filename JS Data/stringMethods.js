

"Developer".charAt(4)               //l
"Developer".concat("","Role")       //DeveloperRole
"Developer".startsWith("D")         //true
"Developer".endsWith("r")           //true
"Developer".includes("v")           //true
"Developer".indexOf("e")            //1
"Developer".lastIndexOf("e")        //7
"Developer".match(/[A-Z]/g)         //['D']
"Developer".padStart(10, "?")       //?Developer
"Developer".padEnd(12, "!")         //Developer!!!
"Developer".repeat(2)               //DeveloperDeveloper
"Developer".replace("e", "x")       //Dxveloper
"Developer".search("l")             //4
"Developer".slice(2, 5)             //vel
"Developer".split('')               //['D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
"Developer".substring(3, 6)         //elo
"Developer".toLowerCase()           //developer
"Developer".toUpperCase()           //DEVELOPER
"Developer".toLocaleLowerCase()     //developer
"Developer".toLocaleUpperCase()     //DEVELOPER
"Developer".charCodeAt(0)           //68 (Unicode value of 'D')
"Developer".codePointAt(0)          //68 (Code point value of 'D')
"Developer".includes("Dev")         //true
" Developer".trim()                 //Developer
" Developer".trimStart()            //"Developer "
" Developer".trimEnd()              //" Developer"


