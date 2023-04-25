const readline = require('readline');

// Cria a interface de leitura de entrada
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para somar dois números
function soma(a, b) {
  return a + b;
}

// Função para subtrair dois números
function subtracao(a, b) {
  return a - b;
}

// Função para multiplicar dois números
function multiplicacao(a, b) {
  return a * b;
}

// Função para dividir dois números
function divisao(a, b) {
  return a / b;
}

// Função para calcular a potência de um número
function potenciacao(a, b) {
  return Math.pow(a, b);
}

// Função para calcular a raiz quadrada de um número
function raizQuadrada(a) {
  return Math.sqrt(a);
}

// Função para realizar os cálculos com base na operação selecionada
function calcular(operacao, num1, num2) {
  switch (operacao) {
    case 'soma':
      return soma(num1, num2);
    case 'subtracao':
      return subtracao(num1, num2);
    case 'multiplicacao':
      return multiplicacao(num1, num2);
    case 'divisao':
      return divisao(num1, num2);
    case 'potenciacao':
      return potenciacao(num1, num2);
    case 'raizQuadrada':
      return raizQuadrada(num1);
    default:
      return 'Operação inválida!';
  }
}

// Função para iniciar a calculadora
function iniciarCalculadora() {
  rl.question('Digite a operação desejada (soma, subtracao, multiplicacao, divisao, potenciacao, raizQuadrada): ', operacao => {
    if (operacao === 'raizQuadrada') {
      rl.question('Digite o número: ', num1 => {
        console.log(`Resultado: ${calcular(operacao, parseFloat(num1))}`);
        rl.close();
      });
    } else {
      rl.question('Digite o primeiro número: ', num1 => {
        rl.question('Digite o segundo número: ', num2 => {
          console.log(`Resultado: ${calcular(operacao, parseFloat(num1), parseFloat(num2))}`);
          rl.close();
        });
      });
    }
  });
}

// Inicia a calculadora
iniciarCalculadora();
