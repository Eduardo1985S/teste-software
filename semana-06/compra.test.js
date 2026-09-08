const { somar, calcularSubtotal, finalizarCompra } = require('../semana-02/compra');
test.each([[2, 3, 5], [10, 0, 10], [-5, 5, 0]])('soma %s com %s', (a, b, esperado) => { expect(somar(a, b)).toBe(esperado); });
test('subtotal isolado', () => { expect(calcularSubtotal(50, 2)).toBe(100); });
test('integração: subtotal chega ao desconto', () => { expect(finalizarCompra(50, 2)).toEqual({ subtotal: 100, total: 90 }); });
test.each([0, -1, 1.5])('quantidade inválida %s', quantidade => { expect(() => finalizarCompra(50, quantidade)).toThrow(); });
