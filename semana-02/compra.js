const { validarNumero, calcularDesconto: aplicarPercentual } = require('../semana-01/funcoes');
function somar(a, b) { validarNumero(a); validarNumero(b); return a + b; }
function calcularSubtotal(preco, quantidade) {
  validarNumero(preco); validarNumero(quantidade);
  if (preco < 0 || !Number.isInteger(quantidade) || quantidade < 1) throw new RangeError('Compra inválida');
  return Math.round(preco * quantidade * 100) / 100;
}
function calcularDesconto(valor) { return aplicarPercentual(valor, 10); }
function finalizarCompra(preco, quantidade) {
  const subtotal = calcularSubtotal(preco, quantidade);
  return { subtotal, total: calcularDesconto(subtotal) };
}
module.exports = { somar, calcularSubtotal, calcularDesconto, finalizarCompra };
