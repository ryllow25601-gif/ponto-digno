# Otimização e produção

A pasta `docs/` contém a versão preparada para publicação no GitHub Pages.

## Medidas aplicadas

- CSS e JavaScript receberam cópias compactadas para produção.
- As imagens do projeto são SVG, adequadas para elementos gráficos e com tamanho reduzido.
- Imagens não críticas usam `loading="lazy"` e `decoding="async"`.
- A imagem principal usa prioridade alta de carregamento.
- O código-fonte original continua separado das cópias de produção.
- Não foi utilizado bundler externo.

## Validação

A redução registrada para os arquivos de texto é baseada no tamanho dos arquivos compactados de produção em relação às versões-fonte. O tempo de carregamento real não é tratado como uma métrica fixa, pois depende de navegador, rede e servidor.

O formulário continua sendo demonstrativo e não envia dados para um servidor.