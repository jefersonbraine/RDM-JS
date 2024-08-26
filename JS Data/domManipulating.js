

//1. document.getElementById() - Seleciona um Elemento pelo ID

const element = document.getElementById("myElement");
console.log(element);

//2. document.getElementsByClassName() - Seleciona Elementos pela Classe

const elements = document.getElementsByClassName('myClass');
console.log(elements); // HTMLCollection

//3. document.getElementsByTagName() - Seleciona Elementos pela Tag

const elements = document.getElementsByTagName('p');
console.log(elements); // HTMLCollection

//4. document.querySelector() - Seleciona o Primeiro Elemento que Correspondente a um Seletor CSS

const element = document.querySelector(".myClass");
console.log(element);


//5. document.querySelectorAll() - Seleciona Todos os Elementos que Correspondem a um Seletor CSS

const elements = document.querySelectorAll('.myClass');
console.log(elements); // NodeList

//6. element.innerHTML - Altera o Conteúdo HTML Interno de um Elemento

const element = document.getElementById("myElement");
element.innerHTML = "<p>New content</p>";

//7. element.textContent - Altera o Texto Interno de um Elemento

const element = document.getElementById("myElement");
element.textContent = "New text content";

//8. element.setAttribute() - Define um Atributo para um Elemento

const element = document.getElementById("myElement");
element.setAttribute("data-info", "value");

//9. element.getAttribute() - Obtém o Valor de um Atributo de um Elemento

const value = document.getElementById("myElement").getAttribute("data-info");
console.log(value);

//10. element.removeAttribute() - Remove um Atributo de um Elemento

const element = document.getElementById("myElement");
element.removeAttribute("data-info");

//11. element.classList.add() - Adiciona uma Classe ao Elemento

const element = document.getElementById("myElement");
element.classList.add("newClass");

//12. element.classList.remove() - Remove uma Classe do Elemento

const element = document.getElementById("myElement");
element.classList.remove("oldClass");

//13. element.classList.toggle() - Alterna a Presença de uma Classe

const element = document.getElementById("myElement");
element.classList.toggle("active");

//14. element.style.property - Altera o Estilo CSS de um Elemento

const element = document.getElementById("myElement");
element.style.backgroundColor = "blue";

//15. element.appendChild() - Adiciona um Elemento Filho ao Final de um Elemento Pai

const parent = document.getElementById("parent");
const child = document.createElement("div");
parent.appendChild(child);

//16. element.insertBefore() - Insere um Elemento Antes de Outro Dentro de um Pai

const parent = document.getElementById("parent");
const newChild = document.createElement("div");
const existingChild = document.getElementById("child");
parent.insertBefore(newChild, existingChild);

//17. element.removeChild() - Remove um Elemento Filho de um Pai

const parent = document.getElementById("parent");
const child = document.getElementById("child");
parent.removeChild(child);

//18. element.replaceChild() - Substitui um Elemento Filho por Outro

const parent = document.getElementById("parent");
const newChild = document.createElement("div");
const oldChild = document.getElementById("child");
parent.replaceChild(newChild, oldChild);

//19. element.cloneNode() - Clona um Elemento

const original = document.getElementById("myElement");
const clone = original.cloneNode(true); // true para clonar com os filhos
console.log(clone);

//20. element.addEventListener() - Adiciona um Event Listener a um Elemento

const button = document.getElementById("myButton");
button.addEventListener("click", () => {
  console.log("Button clicked");
});

//21. element.removeEventListener() - Remove um Event Listener de um Elemento

function handleClick() {
  console.log("Button clicked");
}

const button = document.getElementById("myButton");
button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);

//22. document.createElement() - Cria um Novo Elemento

const newElement = document.createElement("div");
newElement.textContent = "Hello, World!";
document.body.appendChild(newElement);

//23. document.createTextNode() - Cria um Novo Nó de Texto

const textNode = document.createTextNode("Hello, World!");
document.body.appendChild(textNode);


//24. element.scrollIntoView() - Desloca o Scroll para que o Elemento Seja Visível

const element = document.getElementById("myElement");
element.scrollIntoView({ behavior: "smooth" });

//25. element.focus() - Dá Foco a um Elemento

const input = document.getElementById("myInput");
input.focus();

//26. element.blur() - Remove o Foco de um Elemento

const input = document.getElementById("myInput");
input.blur();


//27. element.matches() - Verifica se o Elemento Corresponde a um Seletor CSS

const element = document.getElementById('myElement');
console.log(element.matches('.myClass')); // true ou false

//28. element.closest() - Seleciona o Ancestral Mais Próximo que Corresponde ao Seletor

const element = document.getElementById("myElement");
const closestDiv = element.closest("div");
console.log(closestDiv);

//29. element.outerHTML - Retorna ou Define o HTML do Elemento Incluindo Ele Mesmo

const element = document.getElementById("myElement");
console.log(element.outerHTML);

//30. element.parentElement - Retorna o Elemento Pai

const element = document.getElementById("myElement");
console.log(element.parentElement);
