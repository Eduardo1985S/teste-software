# Semana 1 — Introdução a testes

7h–8h: conceitos; 8h–10h: exemplos guiados; 10h–12h: cenários e prática; 12h–13h: almoço; 13h–15h: investigação e registros; 15h–16h: discussão e entrega.

Um teste compara um resultado obtido com um resultado esperado definido por uma regra. Erro é uma ação humana equivocada; defeito é o problema introduzido no código; falha é o comportamento incorreto observado em execução. Testar ajuda a encontrar problemas, mas não prova ausência de defeitos.

Teste funcional verifica o que o programa faz. Teste não funcional avalia características como tempo de resposta e facilidade de uso.

### Requisitos para esta prática

- Média: duas notas numéricas finitas entre 0 e 10; entradas inválidas geram erro.
- Maioridade: idade inteira não negativa; maior de idade a partir de 18.
- Desconto: preço não negativo e percentual entre 0 e 100; total arredondado para duas casas.
- Senha: texto com pelo menos 8 caracteres, desconsiderando espaços nas extremidades.
- Temperatura: Celsius numérico finito convertido pela fórmula `C * 9 / 5 + 32`.

Execute `node semana-01/demonstracao.js`. Explore `com-defeitos.js`. Registre no mínimo três casos por função: comum, limite e inválido. Não copie o resultado do console como esperado: calcule-o pelas regras.

Exemplo: 18 anos → esperado `true`; obtido `false`; reprovado. A condição `> 18` exclui um limite que deveria ser aceito.

Depois consulte `funcoes.js`. `throw` interrompe a função com um erro; isso é o resultado previsto para entradas inválidas nas funções numéricas. Em scripts de exploração use `try/catch` para observar o erro sem interromper os outros casos.
