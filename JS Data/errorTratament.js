// 1. try...catch

try {
  const result = riskyOperation();
  console.log(result);
} catch (error) {
  console.error('Ocorreu um erro:', error);
}
// try...catch - Executa um bloco de código e captura erros que possam ocorrer, permitindo o tratamento dentro do bloco catch.


//2. throw

function divide(a, b) {
  if (b === 0) {
    throw new Error('Divisão por zero não permitida');
  }
  return a / b;
}

try {
  divide(4, 0);
} catch (error) {
  console.error(error.message);
}
// throw - Lança um erro personalizado que pode ser capturado por um bloco try...catch.


//3. finally

try {
  console.log('Tentando acessar um recurso');
  riskyOperation();
} catch (error) {
  console.error('Erro:', error);
} finally {
  console.log('Operação concluída');
}
// finally - Um bloco que sempre é executado após try e catch, independente de um erro ter ocorrido ou não.


//4. Error Object

try {
  throw new Error('Este é um erro personalizado');
} catch (error) {
  console.log(error.name); // "Error"
  console.log(error.message); // "Este é um erro personalizado"
}
// Error Object - Representa um erro em JavaScript e pode ser personalizado com uma mensagem.


//5. custom Error Class

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CustomError';
  }
}

try {
  throw new CustomError('Algo deu errado');
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}
// custom Error Class - Cria uma classe de erro personalizada para manejar tipos específicos de erro.

//6. try...catch com Promises

async function fetchData() {
  try {
    const response = await fetch('https://api.exemplo.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
  }
}

fetchData();
// try...catch com Promises - Usa try...catch em funções assíncronas para capturar erros durante operações de promise.


//7. try...catch em Arrow Functions Assíncronas

const fetchData = async () => {
  try {
    const response = await fetch('https://api.exemplo.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
  }
};

fetchData();
// try...catch em Arrow Functions Assíncronas - Tratamento de erros em funções assíncronas definidas como arrow functions.

//8. catch() com Promises

fetch('https://api.exemplo.com/data')
  .then(response => response.json())
  .catch(error => console.error('Erro ao buscar dados:', error));
// catch() - Método usado para capturar erros em promessas.

//9. Promise.reject

Promise.reject('Erro rejeitado')
  .catch(error => console.error('Promessa rejeitada:', error));
// Promise.reject - Retorna uma promessa rejeitada que pode ser capturada com catch().

//10. Error com Dados Adicionais

function processData(data) {
  if (!data) {
    const error = new Error('Dados não fornecidos');
    error.code = 400;
    error.details = 'O parâmetro "data" é obrigatório';
    throw error;
  }
  // Processa os dados
}

try {
  processData(null);
} catch (error) {
  console.error(`Erro (${error.code}): ${error.message} - ${error.details}`);
}
// Error com Dados Adicionais - Inclui informações extras no objeto de erro para ajudar no diagnóstico.
