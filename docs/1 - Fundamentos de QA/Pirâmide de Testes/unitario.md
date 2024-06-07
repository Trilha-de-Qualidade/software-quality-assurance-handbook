---
sidebar_position: 2
---

# Teste de unidade

### Introdução

O teste de unidade é a base da pirâmide de teste e envolve a verificação de componentes individuais do software de forma isolada. Esses componentes, ou unidades, são geralmente funções, métodos ou classes. O principal objetivo do teste de unidade é garantir que cada parte do software funcione corretamente por conta própria.

---

## Importância dos testes de unidade

Os testes de unidade são cruciais por várias razões:

- **Detecção precoce de defeitos:** Identificam problemas logo no início do ciclo de desenvolvimento, facilitando a correção.
- **Facilitam a refatoração:** Permitem que os desenvolvedores modifiquem o código com confiança, sabendo que os testes de unidade garantirão a funcionalidade.
- **Documentação:** Servem como uma forma de documentação do comportamento esperado de cada unidade.
- **Redução de custos:** Corrigir defeitos nas fases iniciais é menos caro e demorado.

---

## Características dos testes de unidade

Os testes de unidade têm algumas características específicas:

- **Isolados:** Cada teste de unidade deve ser independente e não depender de outras unidades.
- **Rápidos:** Devem ser rápidos de executar para fornecer feedback imediato.
- **Automatizados:** Idealmente, devem ser automatizados para facilitar a execução repetida durante o desenvolvimento.

---

## Ferramentas e frameworks

Para testes de unidade em JavaScript, duas ferramentas populares são:

- **[Jest](https://jestjs.io/pt-BR/):** Um framework de teste em JavaScript fácil de configurar e usar, especialmente popular no ecossistema React.
- **[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/):** Embora mais conhecido por testes end-to-end, também pode ser usado para testes de unidade em certos contextos.

---

## Boas práticas

Para garantir a eficácia dos testes de unidade, é importante seguir algumas boas práticas:

- **Escreva testes pequenos e focados:** Cada teste deve verificar uma única funcionalidade ou comportamento.
- **Mantenha os testes independentes:** Os testes não devem depender uns dos outros ou de um estado global.
- **Use mocks e stubs:** Utilize mocks e stubs para simular dependências externas e isolar a unidade em teste.
- **Escreva testes claros e legíveis:** Os testes devem ser fáceis de entender e mantidos de forma que qualquer desenvolvedor possa compreender seu propósito.
- **Integração contínua:** Configure integração contínua para executar testes de unidade automaticamente em cada commit.

---

## Exemplo de teste de unidade

Aqui está um exemplo simples de um teste de unidade em JavaScript usando Jest:

```javascript
// Função para somar dois números
function soma(a, b) {
    return a + b;
}

// Testes para a função soma
test('soma 1 + 2 para ser igual a 3', () => {
    expect(soma(1, 2)).toBe(3);
});

test('soma -1 + 1 para ser igual a 0', () => {
    expect(soma(-1, 1)).toBe(0);
});

test('soma -1 + -1 para ser igual a -2', () => {
    expect(soma(-1, -1)).toBe(-2);
});
```

Neste exemplo, a função soma é testada para verificar se retorna os resultados corretos para diferentes entradas.

Os testes de unidade são fundamentais para garantir a qualidade e a robustez do software desde as primeiras etapas do desenvolvimento. Implementar e manter uma boa suíte de testes de unidade contribui significativamente para a estabilidade e a manutenção eficiente do código.