# Semana 4 — Planejamento de testes

7h–8h: conceitos; 8h–10h: exemplos guiados; 10h–12h: cenários e prática; 12h–13h: almoço; 13h–15h: investigação e registros; 15h–16h: discussão e entrega.

Antes de rodar `node semana-04/demonstracao.js`, leia `login.js` e registre um plano usando `docs/modelos.md`.

### Requisitos acordados para o projeto

- R01: `admin` e `1234` retornam `Login realizado`.
- R02: credenciais incorretas retornam `Usuário ou senha inválidos`.
- R03: campo vazio ou somente espaços retorna `Preencha os campos`.
- R04: parâmetros que não sejam textos retornam `Dados inválidos`.
- R05: credenciais diferenciam maiúsculas e minúsculas; espaços extras não são removidos para autenticar.

O cronograma traz mensagens diferentes para campos vazios nas semanas 4 e 5. Aqui R03 é definida antes da execução: a versão inicial não a atende. Um bug só pode ser classificado diante de um requisito acordado.

Prática: registre objetivo, escopo, ambiente, responsáveis e critérios de entrada/saída. Identifique ao menos três riscos. Use probabilidade e impacto de 1 a 3; prioridade = produto. Planeje no mínimo oito casos, incluindo limites e entradas inválidas.

Comece o projeto com a aplicação de login ou um dos temas do README. Para outro tema, escreva requisitos próprios e justifique as técnicas escolhidas.
