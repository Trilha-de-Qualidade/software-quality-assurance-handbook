---
sidebar_position: 0
---

# O que é?

![Example banner](/img/doc/piramide-de-teste.webp)

A pirâmide de teste é um modelo conceitual que ilustra a proporção e o tipo de testes que devem ser realizados em um projeto de desenvolvimento de software para garantir a qualidade. A pirâmide sugere que a maior parte dos testes deve ser constituída por testes de unidade, seguidos por testes de integração, e, por fim, uma menor quantidade de testes de aceitação e end-to-end (E2E).

### Estrutura da pirâmide de teste

A pirâmide de teste é composta por diferentes camadas, cada uma representando um tipo de teste específico. A estrutura básica inclui:

- **Teste de unidade:** A base da pirâmide, representando a maior quantidade de testes. Focados em testar componentes individuais do software isoladamente.
- **Teste de integração:** A camada intermediária, com uma quantidade menor de testes em comparação aos testes de unidade. Avaliam a interação entre diferentes componentes.
- **Teste de aceitação:** A próxima camada, ainda menor em número. Validam que o sistema atende aos requisitos e expectativas dos usuários.
- **Teste E2E:** O topo da pirâmide, com a menor quantidade de testes. Testam o sistema como um todo, simulando cenários reais de uso.
- **Teste exploratório:** Embora não faça parte da estrutura original da pirâmide, é uma prática importante que complementa os outros tipos de testes, focando em descobrir defeitos não previstos pelos testes automatizados.

### Importância da pirâmide de teste

- **Eficiência de custos:** Testes de unidade são mais rápidos e baratos de executar e manter do que testes de nível mais alto.
- **Cobertura abrangente:** Garantir que cada camada da pirâmide seja abordada ajuda a identificar problemas em diferentes níveis do sistema.
- **Rapidez no feedback:** Testes de unidade fornecem feedback rápido, permitindo a detecção e correção de defeitos mais cedo no ciclo de desenvolvimento.
- **Estabilidade:** Reduzir a dependência de testes de nível superior, que são mais frágeis e demorados, promove maior estabilidade no processo de teste.

### Implementação da pirâmide de teste

Implementar a pirâmide de teste envolve a criação e manutenção de uma suíte de testes que cubra todas as camadas:

- **Desenvolvedores e testers:** Devem colaborar para escrever testes de unidade e integração.
- **Automatização:** Testes de unidade e integração devem ser amplamente automatizados para garantir eficiência.
- **Ferramentas:** Utilizar ferramentas apropriadas para cada tipo de teste, como JUnit ou NUnit para testes de unidade, Selenium para testes E2E, entre outras.

---

A pirâmide de teste serve como uma diretriz para garantir que os testes sejam realizados de maneira eficiente e eficaz, cobrindo todos os aspectos do software. Ao seguir este modelo, as equipes de desenvolvimento podem criar um processo de QA robusto que melhora a qualidade e a confiabilidade do software.
