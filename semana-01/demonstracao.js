const funcoes = require('./com-defeitos');
// Observe: o console mostra resultados, mas ainda não decide se estão corretos.
console.log('Média de 10 e 8:', funcoes.calcularMedia(10, 8));
console.log('Média de 0 e 0:', funcoes.calcularMedia(0, 0));
console.log('Média de texto "10" e 8:', funcoes.calcularMedia('10', 8));
console.log('Média sem segunda nota:', funcoes.calcularMedia(10));
console.log('Maioridade aos 18:', funcoes.verificarMaioridade(18));
console.log('Desconto de 10% em 200:', funcoes.calcularDesconto(200, 10));
console.log('Senha com 8 caracteres:', funcoes.validarSenha('abcd1234'));
console.log('0 °C em °F:', funcoes.converterTemperatura(0));
