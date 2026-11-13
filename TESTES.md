# Registro de testes — T05

## Objetivo

Registrar a verificação do portal Copa Senac Hackathon em diferentes larguras de tela, preservando a legibilidade e o acesso ao conteúdo. Cada resultado só é preenchido depois que o teste for feito no navegador.

## Como testar a largura

1. Abrir a página no navegador e apertar F12.
2. Ativar o modo dispositivo (Ctrl+Shift+M) e digitar a largura.
3. Rolar a página inteira e conferir: menu, textos, cartões, tabelas e formulário, sem rolagem horizontal da página.
4. Repetir nas três páginas (`index.html`, `eventos.html` e `contato.html`).

## Resultados dos testes visuais

| Largura | Condição verificada | Resultado | Data |
|---|---|---|---|
| 320 px | Menu, textos, cartões, tabelas e formulário | Pendente | |
| 375 px | Layout de celular e legibilidade | Pendente | |
| 640 px | Reorganização do conteúdo em largura intermediária | Pendente | |
| 1024 px | Distribuição do conteúdo em tela ampla | Pendente | |
| 1440 px | Layout em desktop | Pendente | |

Os pontos de quebra do CSS (antes e depois de cada um) entram nesta tabela depois da revisão do CSS mobile first.

## Recursos responsivos implementados

- Tipografia fluida com `clamp()`.
- Media queries orientadas pelo espaço disponível.
- Container query para os cartões de notícias.
- Rolagem horizontal nas áreas das tabelas, sem ocultar colunas.
- Quebra de textos longos e adaptação dos espaçamentos.

## Verificações complementares

| Condição | Situação |
|---|---|
| Zoom de 200% | Pendente |
| Orientação retrato e paisagem | Pendente |
| Navegação completa por teclado | Pendente |
| Teclado virtual em celular | Pendente |
| Teste em celular físico | Pendente |

## Critérios de aceite

- [ ] A página foi verificada em diferentes larguras de tela.
- [ ] Não foram identificados problemas visuais nos testes realizados.
- [ ] O conteúdo das tabelas permanece acessível por rolagem horizontal.
- [ ] Não foram ocultadas informações apenas para acomodar telas menores.
- [ ] Verificações complementares e teste em dispositivo físico.
