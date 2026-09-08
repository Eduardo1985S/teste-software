const { calcularDesconto } = require('../semana-01/funcoes');
function descontoAntigo(valor) { return calcularDesconto(valor, 10); }
function descontoNovo(valor, clienteVip = false) {
  if (typeof clienteVip !== 'boolean') throw new TypeError('VIP deve ser booleano');
  return calcularDesconto(valor, clienteVip ? 20 : 10);
}
function recuperarCarrinho(texto) {
  // Recuperação simulada: dados corrompidos não podem interromper o programa.
  try {
    const dados = JSON.parse(texto);
    if (!Array.isArray(dados)) return [];
    for (const item of dados) {
      if (!item || typeof item.nome !== 'string' || !Number.isFinite(item.preco) || item.preco < 0) return [];
    }
    return dados;
  } catch { return []; }
}
module.exports = { descontoAntigo, descontoNovo, recuperarCarrinho };
