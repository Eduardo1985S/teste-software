# Exemplo preenchido — login

Exemplo didático de resultados esperados das versões; o grupo deve gerar suas próprias evidências. Requisitos em `semana-04/README.md`.

Escopo: regras da função de login. Fora do escopo: rede, banco e sessão. Ambiente: Node.js, terminal e Jest na semana 6. Entrada: R01–R05 acordados. Saída: todos os casos críticos aprovados e pendências registradas.

| Risco | P | I | Pontuação | Caso |
|---|---:|---:|---:|---|
| Aceitar senha incorreta | 2 | 3 | 6 | CT003 |
| Mensagem insuficiente para campos vazios | 3 | 2 | 6 | CT002 |
| Aceitar tipo inesperado | 2 | 2 | 4 | CT004 |

| Caso | Entrada | Esperado | Original | Corrigido |
|---|---|---|---|---|
| CT001 / R01 | admin / 1234 | Login realizado | Aprovado | Aprovado |
| CT002 / R03 | vazio / vazio | Preencha os campos | Reprovado | Aprovado |
| CT003 / R02 | admin / 0000 | Usuário ou senha inválidos | Aprovado | Aprovado |
| CT004 / R04 | null / número 1234 | Dados inválidos | Reprovado | Aprovado |

BUG-001: campos vazios não recebem orientação específica. Severidade média: prejudica a orientação ao usuário. Prioridade média para esta simulação. Passos: importar login original e chamar `login('', '')`. Esperado: `Preencha os campos`. Obtido: `Usuário ou senha inválidos`. Correção de referência: validação antes de comparar credenciais em `semana-05/login-corrigido.js`. Estado inicial: Aberto; fechar apenas depois do reteste com evidência.

CT004 representa outro defeito (BUG-002): ausência de tratamento específico de tipos, contrariando R04.

Relatório ilustrativo para esses quatro casos: original com 2 aprovados e 2 reprovados (50%); corrigido com 4 aprovados (100%). Esses números não representam toda a suíte nem substituem a execução do grupo. Parecer limitado às regras simuladas, sem validação de segurança de um sistema real.
