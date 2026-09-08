const original = require('../semana-04/login');
const corrigido = require('./login-corrigido');
// Primeiro registre o resultado original. Depois execute o reteste da correção.
const casos = [
  { id: 'CT001', usuario: 'admin', senha: '1234', esperado: 'Login realizado' },
  { id: 'CT002', usuario: '', senha: '', esperado: 'Preencha os campos' },
  { id: 'CT003', usuario: 'admin', senha: '0000', esperado: 'Usuário ou senha inválidos' }
];
for (const caso of casos) {
  const antes = original.login(caso.usuario, caso.senha);
  const depois = corrigido.login(caso.usuario, caso.senha);
  console.log({ ...caso, antes, depois, reteste: depois === caso.esperado ? 'Aprovado' : 'Reprovado' });
}
