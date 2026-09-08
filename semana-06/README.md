# Semana 6 — Automação básica e relatório

7h–8h: retomada; 8h–10h: automação; 10h–11h: validação; 11h–12h: relatório e apresentação.

Na raiz, execute:

```bash
npm ci
npm test
npm run test:coverage
```

Abra primeiro `funcoes.test.js`. `test` dá nome ao cenário; `expect` recebe o resultado; `toBe` compara valores simples; `toEqual` compara estruturas; `toBeCloseTo` compara decimais; `toThrow` verifica erro. `test.each` repete o teste com entradas diferentes: estude depois do primeiro exemplo.

Para filtrar:

```bash
npm test -- semana-06/login.test.js
npm run test:watch
```

Encerre o modo contínuo com Ctrl+C. A cobertura fica em `coverage/lcov-report/index.html`. Cobertura indica código executado pelos testes, não comprova ausência de defeitos.

### Ver uma falha de verdade

```bash
npm run test:bug
```

Esse comando deve terminar com um teste reprovado: o login original não informa campos obrigatórios. Leia Expected e Received. No arquivo `laboratorio/login-com-bug.test.js`, troque o import para `../semana-05/login-corrigido` e execute novamente. Preserve o resultado esperado: ele vem do requisito.

Prática: automatize pelo menos cinco casos do seu projeto, incluindo um inválido e um limite. Explique o teste em termos de entrada, execução, esperado e comparação.

Finalize os dez entregáveis do cronograma usando `docs/modelos.md`. Normalização nesta atividade significa padronizar IDs, campos, nomes de evidências e estados. Não é uma certificação de conformidade com norma externa.
