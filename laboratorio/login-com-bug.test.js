// Falha proposital. Execute somente com npm run test:bug.
const { login } = require('../semana-04/login');
test('BUG-001: campos vazios precisam de mensagem específica', () => {
  expect(login('', '')).toBe('Preencha os campos');
});
