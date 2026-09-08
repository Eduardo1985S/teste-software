# Teste de Software com JavaScript

Material didático do curso Técnico em Desenvolvimento de Sistemas — 45 horas.
Professor: Eduardo Correia.

## Comece aqui

Com Node.js 22 ou superior disponível, baixe o ZIP pelo botão Code do GitHub e extraia, ou clone:

```bash
git clone https://github.com/Eduardo1985S/teste-software.git
cd teste-software
node semana-01/demonstracao.js
```

Semanas 1 a 5 usam apenas Node.js, sem bibliotecas adicionais. Execute os comandos na pasta raiz. Edite os arquivos no VS Code e salve antes de executar novamente.

Na semana 6, instale as dependências do projeto e execute Jest:

```bash
npm ci
npm test
npm run test:coverage
```

A configuração usa JavaScript com CommonJS (`require` e `module.exports`), sem React ou compilação. `require` carrega funções de outro arquivo; `module.exports` disponibiliza essas funções.

## Sequência de aulas

| Semana | Horas | Assunto | Material | Executar |
|---|---:|---|---|---|
| 1 | 8 | Introdução e testes manuais | [Roteiro](semana-01/README.md) | `npm run semana1` |
| 2 | 8 | Níveis de teste | [Roteiro](semana-02/README.md) | `npm run semana2` |
| 3 | 8 | Técnicas de teste | [Roteiro](semana-03/README.md) | `npm run semana3` |
| 4 | 8 | Planejamento e risco | [Roteiro](semana-04/README.md) | `npm run semana4` |
| 5 | 8 | Execução e defeitos | [Roteiro](semana-05/README.md) | `npm run semana5` |
| 6 | 5 | Automação e relatório | [Roteiro](semana-06/README.md) | `npm test` |

Semanas 1–5: 7h–12h e 13h–16h. Semana 6: 7h–12h. Total: 45h.

O [cronograma original](docs/cronograma-original.md) foi preservado. Sua sugestão de Vitest foi adaptada para Jest; a automação continua apenas na semana 6.

## Como estudar

1. Leia os requisitos e escreva o resultado esperado antes de executar.
2. Rode a versão de investigação e anote o resultado obtido.
3. Compare, registre a evidência e descreva o defeito quando houver.
4. Só depois consulte a referência corrigida e faça o reteste.

`semana-01/com-defeitos.js` e `semana-04/login.js` são materiais de investigação. A suíte padrão testa as referências corrigidas. `npm run test:bug` executa uma falha proposital, separada da suíte padrão.

## Projeto da UC

O login é a aplicação de referência completa. Os grupos também podem escolher calculadora, cadastro de alunos, controle de notas, carrinho, estoque ou cadastro de produtos e definir os próprios requisitos antes de implementar.

Copie os [modelos](docs/modelos.md) para registrar plano, riscos, cenários, casos, execução, evidências, bugs e relatório. Consulte o [exemplo preenchido](docs/exemplo-login.md) e as [orientações do professor](docs/professor.md).

## Referências

- [Introdução ao Jest](https://jestjs.io/docs/getting-started)
- [Configuração do Jest](https://jestjs.io/docs/configuration)

Os exemplos de login usam credenciais fictícias e comparação em memória. Não representam autenticação de produção, proteção contra ataques nem persistência de sessão.
