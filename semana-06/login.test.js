const { login } = require('../semana-05/login-corrigido');
test('credenciais corretas', () => { expect(login('admin', '1234')).toBe('Login realizado'); });
test.each([['admin','0000'], ['joao','1234'], ['Admin','1234'], ["' OR 1=1 --",'1234']])('rejeita %s / %s', (usuario, senha) => { expect(login(usuario, senha)).toBe('Usuário ou senha inválidos'); });
test.each([['',''], ['admin',''], ['','1234'], ['   ','1234']])('campos obrigatórios %s / %s', (usuario, senha) => { expect(login(usuario, senha)).toBe('Preencha os campos'); });
test('entrada de tipo incorreto', () => { expect(login(null, 1234)).toBe('Dados inválidos'); });
