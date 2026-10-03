# Ponto Digno

Projeto acadêmico de Desenvolvimento Front-End para Web.

## Estrutura exigida

```
ponto-digno/
├── html/
│   ├── index.html
│   ├── projetos.html
│   └── cadastro.html
├── css/
│   └── style.css
├── js/
│   ├── script.js
│   ├── storage.js
│   ├── ui.js
│   ├── formulario.js
│   ├── templates.js
│   └── router.js
└── imagens/
    ├── 01_doacao_roupas.svg
    ├── 02_kit_higiene.svg
    └── 03_estrutura_ponto.svg
```

## Requisitos implementados

- HTML5 semântico com `header`, `nav`, `main`, `section`, `article`, `footer` e `address`.
- `index.html` com identidade, problema/proposta, objetivo, serviços e contato.
- `projetos.html` com pontos de higiene, roupas/doações, itens de higiene e orientação/encaminhamento.
- `cadastro.html` com `fieldset` para voluntários e doadores.
- Validação nativa com `required`, `minlength`, tipos de campo, `pattern`, `maxlength` e seleção obrigatória.
- Máscaras de CPF, telefone e CEP via JavaScript.
- `autocomplete` compatível para endereço, usando `address-line1` e `address-level2`.
- Persistência e restauração de cadastro demonstrativo com `localStorage`.
- Modal, toast e menu responsivo.
- Roteador JavaScript incluído para a navegação do projeto.
- Cinco aplicações explícitas de Flexbox: cabeçalho, menu, cartões da página inicial, projetos sociais e áreas de ações.
- Sistema visual com 8 cores, 5 tamanhos tipográficos e escala modular de espaçamento em CSS.
- Imagens organizadas em `imagens/` e textos alternativos descritivos.
- Responsividade com media queries e suporte a redução de movimento.
- Linguagem que diferencia proposta/metas de resultados reais, evitando números fictícios de impacto.

## Execução

Abra `html/index.html` no navegador ou use o Live Server no VS Code.

O formulário é demonstrativo e não envia dados para um servidor.
