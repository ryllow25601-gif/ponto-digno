# Otimização e produção

A pasta `docs/` contém a versão preparada para publicação no GitHub Pages.

## Medidas aplicadas

- CSS e JavaScript receberam cópias compactadas para produção.
- As imagens do projeto são SVG, adequadas para os elementos gráficos utilizados.
- Imagens não críticas usam `loading="lazy"` e `decoding="async"`.
- A imagem principal usa `fetchpriority="high"`.
- O código-fonte original continua separado das cópias de produção.
- Não foi utilizado bundler externo.

## Redução dos arquivos de texto

Na versão atual, o CSS-fonte tem cerca de 11,3 KB e a cópia compactada em `docs/css/style.min.css` tem cerca de 8,4 KB, uma redução aproximada de 25,9%.

Nos arquivos JavaScript, a compactação também reduz o tamanho dos arquivos onde há espaço para redução. O ganho é menor em alguns arquivos porque o código-fonte já estava bastante compacto.

Esses valores são tamanhos de arquivo e não representam, sozinhos, o tempo real de carregamento da página.

## Imagens

Os elementos gráficos utilizados no repositório estão em SVG. O formato vetorial evita a necessidade de manter versões rasterizadas grandes para essas ilustrações. Na publicação, as imagens secundárias são carregadas de forma tardia para reduzir trabalho inicial do navegador.

## Observação

O formulário continua sendo demonstrativo e não envia dados para um servidor.