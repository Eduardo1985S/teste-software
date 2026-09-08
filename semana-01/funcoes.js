// Referência corrigida. Abra depois de registrar os cenários.
function validarNumero(valor) {
  if (typeof valor !== 'number' || !Number.isFinite(valor)) {
    throw new TypeError('Informe um número finito');
  }
}
function calcularMedia(n1, n2) {
  validarNumero(n1); validarNumero(n2);
  if (n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10) throw new RangeError('Notas entre 0 e 10');
  return (n1 + n2) / 2;
}
function verificarMaioridade(idade) {
  validarNumero(idade);
  if (!Number.isInteger(idade) || idade < 0) throw new RangeError('Idade inteira não negativa');
  return idade >= 18;
}
function calcularDesconto(valor, percentual) {
  validarNumero(valor); validarNumero(percentual);
  if (valor < 0 || percentual < 0 || percentual > 100) throw new RangeError('Desconto inválido');
  return Math.round(valor * (1 - percentual / 100) * 100) / 100;
}
function validarSenha(senha) { return typeof senha === 'string' && senha.trim().length >= 8; }
function converterTemperatura(celsius) { validarNumero(celsius); return celsius * 9 / 5 + 32; }
module.exports = { validarNumero, calcularMedia, verificarMaioridade, calcularDesconto, validarSenha, converterTemperatura };
