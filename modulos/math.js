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
  
  // Exporta as funções para serem usadas em outros arquivos
  module.exports = {
    soma,
    subtracao,
    multiplicacao,
    divisao,
    potenciacao,
    raizQuadrada
  };
  