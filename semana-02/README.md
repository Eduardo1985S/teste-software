# Semana 2 — Níveis de teste

7h–8h: conceitos; 8h–10h: exemplos guiados; 10h–12h: cenários e prática; 12h–13h: almoço; 13h–15h: investigação e registros; 15h–16h: discussão e entrega.

Teste unitário verifica uma unidade isolada; integração verifica a colaboração entre unidades; sistema verifica o fluxo completo da aplicação; aceitação verifica o atendimento às necessidades acordadas com o responsável pelo produto.

Execute `node semana-02/demonstracao.js` e leia `compra.js`.

Requisitos: preço finito e não negativo; quantidade inteira a partir de 1; toda compra recebe 10% de desconto. Subtotal e total têm duas casas decimais.

| Atividade | Nível |
|---|---|
| Verificar `somar(2, 3)` | Unitário |
| Verificar se subtotal 100 chega ao desconto e vira 90 | Integração |
| Rodar o fluxo completo da aplicação de terminal, da entrada no script à saída | Sistema |
| Professor validar que a compra de 2 itens de 50 atende à regra combinada | Aceitação |

Prática: escreva seis cenários e justifique seus níveis. Teste quantidade zero, negativa e fracionada. A aplicação é um pequeno script de terminal, sem interface web ou banco. Testar apenas a função de compra não substitui a avaliação do fluxo completo e sua aceitação.
