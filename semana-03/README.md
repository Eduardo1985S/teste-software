# Semana 3 — Técnicas de teste

7h–8h: conceitos; 8h–10h: exemplos guiados; 10h–12h: cenários e prática; 12h–13h: almoço; 13h–15h: investigação e registros; 15h–16h: discussão e entrega.

Execute `node semana-03/demonstracao.js` e examine `tecnicas.js`.

| Técnica | Experimento e evidência |
|---|---|
| Regressão | Após incluir VIP com 20%, cliente comum continua com 10% |
| Paralelo | Mesmas entradas nas versões antiga e nova; comparar cliente comum |
| Recuperação | JSON inválido retorna carrinho vazio; JSON válido preserva produtos |
| Performance | Medir tempo com `performance.now()` e registrar volume |
| Estresse | Observar carga crescente limitada; discutir como detectar degradação |
| Segurança | Testar credenciais incorretas, campos vazios e texto inesperado no login da semana 4 |

Performance é medida sob condições definidas; estresse procura limites e comportamento além da capacidade esperada. O laço de 1.000 a 100.000 operações é uma simulação limitada, sem encontrar o limite real do sistema. Não aumente indefinidamente. Não mede rede nem múltiplos usuários.

Repita as medições três vezes e registre máquina, versão do Node, volume e duração. Não conclua que uma versão é melhor com uma única medição. Não crie teste Jest com tempo máximo fixo nesta prática.

Segurança: o texto `' OR 1=1 --` deve ser rejeitado como usuário. Aqui não existe SQL: rejeitar esse texto não demonstra proteção contra injeção SQL. Compare também mensagens de usuário inexistente e senha incorreta; ambas são genéricas.

Prática: produza um cenário por técnica e diga qual evidência comprova o resultado. Para paralelo, não compare VIP com a versão antiga, pois a regra mudou.
