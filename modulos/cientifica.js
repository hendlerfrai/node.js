const readline = require('readline');
const math = require('./math'); // Importa o módulo math.js

// Cria a interface de leitura de entrada
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para realizar os cálculos com base na operação selecionada
function calcular(operacao, num1, num2) {
  switch (operacao) {
    case 'soma':
      return math.soma(num1, num2); // Usa a função soma do módulo math.js
    case 'subtracao':
      return math.subtracao(num1, num2); // Usa a função subtracao do módulo math.js
    case 'multiplicacao':
      return math.multiplicacao(num1, num2); // Usa a função multiplicacao do módulo math.js
    case 'divisao':
      return math.divisao(num1, num2); // Usa a função divisao do módulo math.js
    case 'potenciacao':
      return math.potenciacao(num1, num2); // Usa a função potenciacao do módulo math.js
    case 'raizQuadrada':
      return math.raizQuadrada(num1); // Usa a função raizQuadrada do módulo math.js
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
          console.log(`Resultado: ${calcular(operacao, parseFloat (num1), parseFloat(num2))}`);
          rl.close();
          });
          });
          }
          });
          }
          
          // Inicia a calculadora
          iniciarCalculadora();
