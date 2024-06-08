---
sidebar_position: 7
---

# Exploratório

O teste exploratório é uma abordagem de teste que enfatiza a liberdade e a responsabilidade do testador para explorar a aplicação de forma criativa e intuitiva. Em vez de seguir um script de teste predefinido, os testadores usam sua experiência e intuição para encontrar defeitos e problemas de usabilidade. Este tipo de teste é especialmente útil para identificar cenários e problemas que não foram previstos durante o planejamento.

---

## Importância dos testes exploratórios

Os testes exploratórios são importantes por várias razões:

- **Flexibilidade:** Permitem aos testadores explorar diferentes áreas da aplicação sem a restrição de scripts predefinidos.
- **Criatividade:** Incentivam a criatividade e a intuição do testador, ajudando a identificar problemas inesperados.
- **Identificação de problemas de usabilidade:** Ajudam a descobrir problemas de usabilidade que podem não ser capturados por testes automatizados.
- **Feedback rápido:** Fornecem feedback rápido e valioso sobre a qualidade do software.

---

## Características dos testes exploratórios

Os testes exploratórios possuem algumas características específicas:

- **Baseados em cenários reais:** Focam em cenários reais e na experiência do usuário.
- **Adaptáveis:** Permitem ajustes rápidos na abordagem de teste com base nos resultados e descobertas anteriores.
- **Centrados no testador:** Dependem fortemente das habilidades e do conhecimento do testador.

---

## Ferramentas e frameworks

Embora os testes exploratórios não dependam de ferramentas específicas, algumas ferramentas podem ajudar a documentar e organizar o processo:

- **Jira:** Para registrar e rastrear defeitos e histórias de teste.
- **TestRail:** Para documentar os casos de teste exploratórios e capturar resultados.
- **Session-based Test Management (SBTM):** Uma abordagem estruturada para gerenciar e registrar sessões de teste exploratório.

---

## Boas práticas

Para garantir a eficácia dos testes exploratórios, é importante seguir algumas boas práticas:

- **Defina objetivos claros:** Antes de iniciar, defina o que você espera descobrir ou validar.
- **Documente suas descobertas:** Mantenha um registro das áreas exploradas, defeitos encontrados e ações realizadas.
- **Use charters de teste:** Crie guias curtos e objetivos para direcionar suas sessões de teste.
- **Colabore com a equipe:** Compartilhe suas descobertas com a equipe de desenvolvimento e outros testadores.
- **Refine continuamente:** Ajuste sua abordagem com base nos insights e aprendizados obtidos durante as sessões de teste.

---

## Exemplo de teste exploratório

Aqui está um exemplo de como você pode realizar um teste exploratório para uma aplicação web:

### Cenário: Teste Exploratório de Cadastro de Usuário

**Objetivo:** Explorar a funcionalidade de cadastro de usuário para identificar possíveis problemas e melhorias na experiência do usuário.

**Passos:**

1. Acesse a página de cadastro.
2. Tente criar uma conta com um nome de usuário já existente.
3. Tente criar uma conta com um endereço de e-mail inválido.
4. Tente criar uma conta com uma senha que não atenda aos requisitos de complexidade.
5. Verifique se as mensagens de erro são claras e úteis.
6. Tente criar uma conta com dados válidos.
7. Verifique se o usuário é redirecionado corretamente após o cadastro.
8. Verifique a aparência e usabilidade do formulário em diferentes navegadores e dispositivos.

---

## Checklist de teste exploratório para desenvolvimento web

Aqui está um checklist detalhado para ajudar no processo de teste exploratório de uma aplicação web:

### Funcionalidade

- [ ] Verificar todas as funcionalidades principais da aplicação.
- [ ] Testar cenários de uso comuns e alternativos.
- [ ] Verificar a interação entre diferentes funcionalidades.

### Usabilidade

- [ ] Avaliar a facilidade de uso e navegação.
- [ ] Verificar a clareza das mensagens de erro e feedbacks.
- [ ] Testar a aplicação em diferentes dispositivos e tamanhos de tela.

### Validação de entrada

- [ ] Verificar a validação de todos os campos de entrada.
- [ ] Testar com diferentes tipos de dados (válidos e inválidos).
- [ ] Verificar a manipulação de dados especiais (caracteres especiais, dados longos, etc.).

### Segurança

- [ ] Verificar a proteção contra ataques comuns (SQL Injection, XSS, etc.).
- [ ] Testar a funcionalidade de login/logout e recuperação de senha.
- [ ] Verificar a gestão de sessões e cookies.

### Performance

- [ ] Avaliar o tempo de carregamento das páginas.
- [ ] Verificar a performance sob diferentes condições de rede.
- [ ] Testar a aplicação com diferentes volumes de dados.

### Compatibilidade

- [ ] Verificar a compatibilidade com diferentes navegadores (Chrome, Firefox, Safari, etc.).
- [ ] Testar a aplicação em diferentes sistemas operacionais (Windows, macOS, Linux).
- [ ] Avaliar o comportamento em diferentes resoluções de tela.

### Acessibilidade

- [ ] Verificar a conformidade com as diretrizes de acessibilidade (WCAG).
- [ ] Testar a navegação por teclado.
- [ ] Avaliar a compatibilidade com leitores de tela.

---

Os testes exploratórios são uma ferramenta poderosa para descobrir problemas inesperados e melhorar a qualidade geral do software. Eles complementam outras formas de teste e fornecem insights valiosos sobre a experiência do usuário e a funcionalidade do sistema.
