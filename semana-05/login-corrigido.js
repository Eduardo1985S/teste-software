// Credenciais fictícias usadas apenas para aprender testes.
function login(usuario, senha) {
  if (typeof usuario !== 'string' || typeof senha !== 'string') return 'Dados inválidos';
  if (usuario.trim() === '' || senha.trim() === '') return 'Preencha os campos';
  if (usuario === 'admin' && senha === '1234') return 'Login realizado';
  return 'Usuário ou senha inválidos';
}
module.exports = { login };
