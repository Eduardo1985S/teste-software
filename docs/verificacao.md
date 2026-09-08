# Verificação do material

Executada em 08/09/2026 com Node.js 24.19.0.

- Demonstrações das semanas 1 a 5: executadas, saída normal.
- `npm run test:coverage`: quatro suítes, 51 testes aprovados.
- Cobertura dos quatro módulos de referência configurados: 98,21% das instruções, 98,03% dos ramos e 100% das funções/linhas. Não inclui todos os arquivos do repositório.
- `npm run test:bug`: um teste reprovado intencionalmente. Esperado: Preencha os campos; obtido: Usuário ou senha inválidos.
- Sintaxe dos arquivos JavaScript e links locais dos roteiros verificados.

Publicação remota não realizada: a integração GitHub retornou 403 Resource not accessible by integration na tentativa de criar o primeiro arquivo. O pacote está pronto para envio ao repositório.

Para enviar pelo navegador: extraia o ZIP, abra o repositório vazio no GitHub, use uploading an existing file e arraste o conteúdo interno da pasta teste-software. Inclua as pastas e arquivos, não o ZIP. Confirme o commit. Não envie node_modules ou coverage.
