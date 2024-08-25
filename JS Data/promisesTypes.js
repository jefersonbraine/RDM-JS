// 1. CRIANDO UMA PROMISE
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Operation was successful");
  } else {
    reject("Operation failed");
  }
});

// .then() - Executa uma função quando a Promise é resolvida com sucesso.
myPromise
  .then((result) => {
    console.log(result); // "Operation was successful"
  })
  .catch((error) => {
    console.log(error); // Caso haja um erro, essa linha seria executada
  });

///////////////////////////////////////////////////////////////////////

// 2. ENCADEAMENTO DE PROMISES
const firstPromise = new Promise((resolve) => {
  resolve("First result");
});

// .then() - Permite o encadeamento de Promises, onde o resultado de uma é passado para a próxima.
firstPromise
  .then((result) => {
    console.log(result); // "First result"
    return "Second result";
  })
  .then((result) => {
    console.log(result); // "Second result"
  });

///////////////////////////////////////////////////////////////////////

// 3. TRATAMENTO DE ERROS COM `CATCH`
const failingPromise = new Promise((resolve, reject) => {
  reject("Something went wrong");
});

// .catch() - Captura e trata erros que ocorrem em qualquer ponto da cadeia de Promises.
failingPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error); // "Something went wrong"
  });

///////////////////////////////////////////////////////////////////////

// 4. OPERAÇÕES ASSÍNCRONA COM `async` e `await`
async function fetchData() {
  try {
    const data = await new Promise((resolve) => {
      setTimeout(() => resolve("Fetched data"), 1000);
    });

    console.log(data); // "Fetched data"
  } catch (error) {
    console.log(error); // Captura erros caso ocorram
  }
}

fetchData();

///////////////////////////////////////////////////////////////////////

// 5. Promise.all() PARA EXECUÇÃO PARALELA
const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Result 1"), 1000)
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Result 2"), 500)
);

// Promise.all() - Executa várias Promises em paralelo e resolve quando todas são concluídas.
Promise.all([promise1, promise2]).then((results) => {
  console.log(results); // ["Result 1", "Result 2"]
});

///////////////////////////////////////////////////////////////////////

// 6. Promise.race() PARA RETORNAR A PRIMEIRA PROMISE RESOLVIDA
const slowPromise = new Promise((resolve) =>
  setTimeout(() => resolve("Slow result"), 2000)
);
const fastPromise = new Promise((resolve) =>
  setTimeout(() => resolve("Fast result"), 1000)
);

// Promise.race() - Retorna a primeira Promise que é resolvida ou rejeitada.
Promise.race([slowPromise, fastPromise]).then((result) => {
  console.log(result); // "Fast result"
});

///////////////////////////////////////////////////////////////////////

// 7. Promise.finally() PARA LIMPEZA APÓS RESOLUCAO OU REJEICAO
const examplePromise = new Promise((resolve, reject) => {
  const condition = true;
  
  if (condition) {
    resolve('Success');
  } else {
    reject('Failure');
  }
});

// .finally() - Executa uma função após a Promise ser resolvida ou rejeitada, independente do resultado.
examplePromise
  .then(result => console.log(result))  // "Success"
  .catch(error => console.log(error))   // Caso fosse "Failure"
    .finally(() => console.log('Cleanup')); // "Cleanup" - Sempre executado
  
///////////////////////////////////////////////////////////////////////

// 8. Promise.reject() - PARA CRIAR UMA PROMISE REJEITADA
const rejectedPromise = Promise.reject("Error occurred");

// Promises rejeitadas podem ser tratadas diretamente com .catch()
rejectedPromise.catch((error) => {
  console.log(error); // "Error occurred"
});

///////////////////////////////////////////////////////////////////////

// 9. Promise.resolve() - PARA CRIAR UMA PROMISE RESOLVIDA
const resolvedPromise = Promise.resolve("Immediate result");

// Promises resolvidas são imediatamente resolvidas com o valor fornecido
resolvedPromise.then((result) => {
  console.log(result); // "Immediate result"
});

///////////////////////////////////////////////////////////////////////

// 10. CICLO DE VIDA DE UMA PROMISE (Pending -> Resolved/Rejected)
const lifeCyclePromise = new Promise((resolve, reject) => {
  console.log('Promise is pending');
  
  setTimeout(() => {
    resolve('Promise is resolved');
    // ou
    // reject('Promise is rejected');
  }, 2000);
});

lifeCyclePromise
  .then(result => console.log(result))   // "Promise is resolved"
  .catch(error => console.log(error));  // "Promise is rejected" se o reject fosse chamado
