const { performance } = require('node:perf_hooks');
const { descontoAntigo, descontoNovo, recuperarCarrinho } = require('./tecnicas');
console.log('Regressão: comum deve continuar pagando 90:', descontoNovo(100));
console.log('Nova regra: VIP deve pagar 80:', descontoNovo(100, true));
for (const valor of [0, 50, 100, 199.9]) {
  console.log('Paralelo — mesma entrada, duas versões:', valor, descontoAntigo(valor), descontoNovo(valor));
}
console.log('Recuperação após JSON inválido:', recuperarCarrinho('{quebrado'));
// Carga crescente e limitada: demonstração local, não teste de estresse de produção.
for (const quantidade of [1000, 10000, 100000]) {
  let total = 0;
  const inicio = performance.now();
  for (let i = 0; i < quantidade; i++) total += descontoNovo(100);
  console.log({ quantidade, total, milissegundos: performance.now() - inicio });
}
