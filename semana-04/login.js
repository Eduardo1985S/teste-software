// Simulação didática em memória. Não implementa autenticação real.
function login(usuario, senha) {
  if (usuario === 'admin' && senha === '1234') return 'Login realizado';
  return 'Usuário ou senha inválidos';
}
module.exports = { login };
