const { calcularMedia, verificarMaioridade, calcularDesconto, validarSenha, converterTemperatura } = require('../semana-01/funcoes');
// test descreve o cenário; expect recebe o obtido; toBe informa o esperado.
test('média de 10 e 8 deve ser 9', () => { expect(calcularMedia(10, 8)).toBe(9); });
test('média aceita zero', () => { expect(calcularMedia(0, 0)).toBe(0); });
test.each([['10', 8], [10, undefined], [NaN, 8], [Infinity, 8]])('média rejeita entrada inválida %s / %s', (a, b) => {
  // A função de seta adia a execução para que Jest capture o erro.
  expect(() => calcularMedia(a, b)).toThrow(TypeError);
});
test.each([[-1, 8], [10, 11]])('média rejeita notas fora do intervalo %s / %s', (a, b) => { expect(() => calcularMedia(a, b)).toThrow(RangeError); });
test.each([[17, false], [18, true], [19, true]])('maioridade com %s anos', (idade, esperado) => { expect(verificarMaioridade(idade)).toBe(esperado); });
test('idade negativa é inválida', () => { expect(() => verificarMaioridade(-1)).toThrow(); });
test.each([[200, 10, 180], [100, 0, 100], [100, 100, 0]])('desconto de %s com %s por cento', (valor, percentual, esperado) => { expect(calcularDesconto(valor, percentual)).toBe(esperado); });
test('percentual acima de 100 é inválido', () => { expect(() => calcularDesconto(100, 101)).toThrow(); });
test.each([['1234567', false], ['12345678', true], [null, false], ['        ', false]])('senha %s', (senha, esperado) => { expect(validarSenha(senha)).toBe(esperado); });
test.each([[0, 32], [100, 212], [-40, -40]])('conversão de %s graus Celsius', (c, f) => { expect(converterTemperatura(c)).toBeCloseTo(f); });
