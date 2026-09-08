const { somar, calcularSubtotal, calcularDesconto, finalizarCompra } = require('./compra');
console.log('Função isolada:', somar(2, 3));
console.log('Subtotal isolado:', calcularSubtotal(50, 2));
console.log('Desconto isolado:', calcularDesconto(100));
console.log('Integração das funções:', finalizarCompra(50, 2));
// Sistema: execute todo o fluxo desta pequena aplicação de terminal.
// Aceitação: o responsável pela regra valida se o resultado atende ao requisito.
