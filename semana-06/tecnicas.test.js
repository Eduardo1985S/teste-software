const { descontoAntigo, descontoNovo, recuperarCarrinho } = require('../semana-03/tecnicas');
test('regressão: cliente comum mantém 10%', () => { expect(descontoNovo(100)).toBe(90); });
test('VIP recebe 20%', () => { expect(descontoNovo(100, true)).toBe(80); });
test.each([0, 50, 199.9])('paralelo: comum com valor %s', valor => { expect(descontoNovo(valor)).toBe(descontoAntigo(valor)); });
test.each(['{quebrado', '{}', '[null]', '[{"nome":"Livro","preco":-1}]'])('recuperação de %s', texto => { expect(recuperarCarrinho(texto)).toEqual([]); });
test('preserva carrinho válido', () => { expect(recuperarCarrinho('[{"nome":"Livro","preco":20}]')).toEqual([{ nome: 'Livro', preco: 20 }]); });
