function verificarPrimalidade(numero, iteracoes) {
    if (numero === 2 || numero === 3){
      return true;
    }
  
    if (numero <= 1 || numero % 2 === 0) {
      return false;
    }
  
    const testemunhas = gerarTestemunhas(numero, iteracoes);
  
    for (let i = 0; i < testemunhas.length; i++) {
      const a = testemunhas[i];
  
      if (!testeMillerRabin(numero, a)) {
        return false;
      }
    }
  
    return true;
  }
  
  function gerarTestemunhas(numero, iteracoes) {
    const testemunhas = [];
  
    for (let i = 0; i < iteracoes; i++) {
      const a = Math.floor(Math.random() * (numero - 4)) + 2;
      testemunhas.push(a);
    }
  
    return testemunhas;
  }
  
  function testeMillerRabin(numero, a) {
    let m = numero - 1;
    let k = 0;
  
    while (m % 2 === 0) {
      m /= 2;
      k++;
    }
  
    let x = exponenciacaoModular(a, m, numero);
  
    if (x === 1 || x === numero - 1) {
      return true;
    }
  
    for (let i = 0; i < k - 1; i++) {
      x = (x * x) % numero;
  
      if (x === 1) {
        return false;
      }
  
      if (x === numero - 1) {
        return true;
      }
    }
  
    return false;
  }
  
  function exponenciacaoModular(base, expoente, modulo) {
    let resultado = 1;
  
    while (expoente > 0) {
      if (expoente % 2 === 1) {
        resultado = (resultado * base) % modulo;
      }
  
      base = (base * base) % modulo;
      expoente = Math.floor(expoente / 2);
    }
  
    return resultado;
  }
  
  // Exemplo de uso
  const numero = 17;
  const iteracoes = 5;
  
  if (verificarPrimalidade(numero, iteracoes)) {
    console.log(numero + ' é primo');
  } else {
    console.log(numero + ' não é primo');
  }