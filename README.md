# Ponto Digno

Projeto acadêmico de Desenvolvimento Front-End para Web.

## Estrutura

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
│   └── router.js
├── imagens/
└── docs/
    ├── index.html
    ├── projetos.html
    ├── cadastro.html
    ├── css/style.min.css
    ├── js/*.min.js
    └── imagens/*.svg
```

## Requisitos implementados

- HTML5 semântico com landmarks e elementos de formulário acessíveis.
- Validação nativa e máscaras de CPF, telefone e CEP.
- Persistência demonstrativa de dados básicos com `localStorage`.
- Modal, toast e menu responsivo com foco visível e navegação por teclado.
- Estados `aria-invalid` no formulário e link para pular ao conteúdo principal.
- Cinco aplicações explícitas de Flexbox e Grid de 12 colunas.
- Responsividade e suporte a redução de movimento.
- Imagens SVG com textos alternativos.
- Versão de produção em `docs/` com CSS/JavaScript compactados e carregamento otimizado de imagens.

## GitFlow

- `main`: versão estável.
- `develop`: integração do desenvolvimento.
- `feature/*`: novas funcionalidades.
- `hotfix/*`: correções urgentes.

## Execução local

Abra `html/index.html` com o Live Server no VS Code.

## Publicação

A pasta `docs/` foi preparada para publicação como site estático no GitHub Pages.

O formulário é demonstrativo e não envia dados para um servidor.
Projeto desenvolvido para a Experiência Prática de Desenvolvimento Front-End.
