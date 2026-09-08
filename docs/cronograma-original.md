# **CRONOGRAMA – TESTE DE SOFTWARE COM JAVASCRIPT**

**Curso:** Técnico em Desenvolvimento de Sistemas  
**Unidade Curricular:** Teste de Software  
**Carga Horária:** 45 horas  
**Periodicidade:** 1 encontro por semana  
**Horário:** 7h às 16h  
**Intervalo para almoço:** 12h às 13h  
**Linguagem utilizada nas práticas:** JavaScript

## **Objetivo da Unidade Curricular**

Desenvolver capacidades técnicas e socioemocionais que permitam aplicar testes para assegurar o atendimento aos requisitos funcionais e não funcionais de uma aplicação.

Durante a Unidade Curricular, os conceitos de teste serão trabalhados utilizando principalmente **JavaScript**, aproveitando a trilha de programação já desenvolvida pela turma e permitindo que os alunos testem códigos, funções e pequenas aplicações que consigam compreender.

---

# **Organização da carga horária**

A Unidade Curricular possui **45 horas**.

Serão realizados:

* **5 encontros de 8 horas**  
* **1 encontro de 5 horas**

Total: **45 horas**

---

# 

# **SEMANA 1 – INTRODUÇÃO A TESTES DE SOFTWARE**

**Carga horária: 8 horas**

## **Conteúdos**

* O que é Teste de Software;  
* Por que testar um sistema;  
* Erro, falha e defeito;  
* Qualidade de software;  
* Resultado esperado e resultado obtido;  
* Testes funcionais;  
* Testes não funcionais;  
* Introdução ao conceito de caso de teste.

## **Integração com JavaScript**

Utilizar pequenos códigos JavaScript para mostrar que um programa pode funcionar em algumas situações e falhar em outras.

### **Exemplo**

```javascript
function calcularMedia(n1, n2) {
  return (n1 + n2) / 2;
}
```

Os alunos poderão responder:

* O que acontece com `10` e `8`?  
* O que acontece com `0` e `0`?  
* E com `"10"` e `8`?  
* E se não enviarmos um dos valores?

A ideia é mostrar que **testar é experimentar diferentes cenários de entrada e verificar o resultado**.

## **Atividade prática**

Entregar pequenas funções JavaScript para os alunos criarem cenários de teste manual.

Exemplos:

* Calcular média;  
* Verificar maioridade;  
* Calcular desconto;  
* Validar senha;  
* Converter temperatura.

---

# **SEMANA 2 – NÍVEIS DE TESTE**

**Carga horária: 8 horas**

## **Conteúdos**

* Teste Unitário;  
* Teste de Integração;  
* Teste de Sistema;  
* Teste de Aceitação;  
* Diferenças entre os níveis;  
* Quando utilizar cada nível.

Os níveis previstos no plano da UC são unitário, integração, sistema e aceitação.

## **Integração com JavaScript**

### **Teste Unitário**

Testar uma função isoladamente.

```javascript
function somar(a, b) {
  return a + b;
}
```

Exemplo de casos:

| Entrada | Esperado |
| :---- | :---- |
| 2 e 3 | 5 |
| 10 e 0 | 10 |
| \-5 e 5 | 0 |

### **Teste de Integração**

Trabalhar duas funções juntas.

```javascript
function calcularSubtotal(preco, quantidade) {
  return preco * quantidade;
}

function calcularDesconto(valor) {
  return valor * 0.9;
}
```

Os alunos observam como uma função pode depender do resultado de outra.

## **Atividade prática**

Fornecer um pequeno conjunto de funções JavaScript e pedir que os alunos classifiquem os testes como:

**Unitário → Integração → Sistema → Aceitação**

---

# **SEMANA 3 – TÉCNICAS DE TESTE**

**Carga horária: 8 horas**

## **Conteúdos**

* Teste de Regressão;  
* Teste de Estresse;  
* Teste de Recuperação;  
* Teste de Performance;  
* Teste de Segurança;  
* Teste Paralelo.

Essas técnicas fazem parte dos conhecimentos previstos no plano de curso.

## **Integração com JavaScript**

### **Teste de Regressão**

Apresentar uma função funcionando:

```javascript
function calcularDesconto(valor) {
  return valor * 0.9;
}
```

Depois alterar a regra:

```javascript
function calcularDesconto(valor, clienteVip) {
  if (clienteVip) {
    return valor * 0.8;
  }

  return valor * 0.9;
}
```

Pergunta para a turma:

> Depois de alterar a função, os comportamentos antigos continuam funcionando?

É aí que aparece o conceito de **regressão**.

### **Performance**

Comparar operações simples com grandes quantidades de dados.

```javascript
const inicio = performance.now();

// código a ser analisado

const fim = performance.now();

console.log(`Tempo: ${fim - inicio} ms`);
```

Não é necessário aprofundar otimização. O objetivo é apenas mostrar que **tempo de execução também pode ser medido**.

## **Atividade prática**

Entregar diferentes situações e pedir ao aluno para identificar qual técnica seria mais adequada.

Exemplo:

> Após atualizar o sistema, precisamos verificar se funcionalidades antigas continuam funcionando.

**Resposta:** Teste de regressão.

---

# **SEMANA 4 – PLANEJAMENTO DE TESTES COM JAVASCRIPT**

**Carga horária: 8 horas**

## **Conteúdos**

* Planejamento de testes;  
* Análise de risco;  
* Identificação das funcionalidades críticas;  
* Plano de teste;  
* Cenários de teste;  
* Definição do que será testado;  
* Escolha das técnicas de teste.

O plano da UC prevê especificamente **análise de risco e plano de teste** dentro do bloco de planejamento.

## **Aplicação prática**

Utilizar uma pequena aplicação JavaScript.

Por exemplo:

### **Sistema de Login**

```javascript
function login(usuario, senha) {
  if (usuario === "admin" && senha === "1234") {
    return "Login realizado";
  }

  return "Usuário ou senha inválidos";
}
```

Antes de executar qualquer teste, os alunos deverão planejar os cenários.

### **Exemplos**

| Cenário | Usuário | Senha | Resultado esperado |
| :---- | :---- | :---- | :---- |
| Login correto | admin | 1234 | Login realizado |
| Senha incorreta | admin | 0000 | Usuário ou senha inválidos |
| Usuário incorreto | joao | 1234 | Usuário ou senha inválidos |
| Campos vazios | vazio | vazio | Usuário ou senha inválidos |

## **Atividade**

Início do **Projeto de Testes da UC**.

Cada grupo recebe ou escolhe uma pequena aplicação JavaScript.

Exemplos:

* Sistema de login;  
* Calculadora;  
* Cadastro de alunos;  
* Controle de notas;  
* Carrinho de compras;  
* Controle de estoque;  
* Cadastro de produtos.

O grupo deverá iniciar o **Plano de Teste**.

---

# **SEMANA 5 – CASOS DE TESTE, EXECUÇÃO E BUGS**

**Carga horária: 8 horas**

## **Conteúdos**

* Configuração do ambiente de teste;  
* Equipe de testes;  
* Casos de teste;  
* Execução dos testes;  
* Evidências;  
* Resultado esperado;  
* Resultado obtido;  
* Gestão de defeitos;  
* Registro de bugs.

Esses elementos fazem parte do bloco de execução previsto na UC: ambiente, equipe, casos de teste, ferramentas, gestão de defeitos e relatório.

## **Integração com JavaScript**

Os alunos executarão os testes planejados sobre a aplicação JavaScript.

### **Modelo de Caso de Teste**

| Campo | Exemplo |
| :---- | :---- |
| ID | CT001 |
| Funcionalidade | Login |
| Cenário | Login válido |
| Entrada | admin / 1234 |
| Resultado esperado | Login realizado |
| Resultado obtido | Login realizado |
| Status | Aprovado |

Outro exemplo:

| Campo | Exemplo |
| :---- | :---- |
| ID | CT002 |
| Funcionalidade | Login |
| Cenário | Campos vazios |
| Entrada | vazio / vazio |
| Resultado esperado | Avisar campos obrigatórios |
| Resultado obtido | Usuário ou senha inválidos |
| Status | Reprovado |

Nesse momento, surge um **defeito**.

## **Registro de Bug**

Os alunos poderão utilizar uma estrutura simples:

**ID:** BUG-001  
**Título:** Sistema não informa campos obrigatórios  
**Funcionalidade:** Login  
**Severidade:** Média  
**Passos para reproduzir:** deixar usuário e senha vazios  
**Resultado esperado:** mensagem "Preencha os campos"  
**Resultado obtido:** "Usuário ou senha inválidos"  
**Status:** Aberto

---

# **SEMANA 6 – AUTOMAÇÃO BÁSICA E RELATÓRIO FINAL**

**Carga horária: 5 horas**

## **Conteúdos**

* Introdução à automação de testes;  
* Diferença entre teste manual e automatizado;  
* Ferramentas de teste;  
* Gestão de defeitos;  
* Relatório de teste;  
* Validação dos resultados;  
* Normalização;  
* Encerramento do processo de testes.

## **Introdução a testes automatizados**

Neste momento pode ser apresentada uma ferramenta compatível com JavaScript, como **Vitest**.

A ideia não é aprofundar a ferramenta, mas mostrar que alguns testes manuais podem ser automatizados.

Exemplo conceitual:

```javascript
function somar(a, b) {
  return a + b;
}
```

Teste:

```javascript
expect(somar(2, 3)).toBe(5);
```

O aluno deve compreender a lógica:

**Entrada → execução → resultado esperado → comparação.**

## **Projeto Final**

Os grupos finalizam o projeto iniciado na Semana 4\.

### **Entregáveis**

1. Aplicação JavaScript utilizada;  
2. Plano de Teste;  
3. Análise de risco;  
4. Cenários de teste;  
5. Casos de teste;  
6. Execução dos casos;  
7. Evidências;  
8. Bugs encontrados;  
9. Situação dos defeitos;  
10. Relatório Final de Testes.

---
