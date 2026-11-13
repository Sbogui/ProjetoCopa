# Auditoria do esqueleto

Lista das inconsistências do esqueleto do enunciado (Projeto de recuperação UC15). Cada item mostra onde está, o problema, o impacto e a correção. O campo Situação diz se a correção já está no projeto.

## Inconsistência 1

- Localização: `<html lang="en">`, primeira linha do esqueleto
- Problema encontrado: O idioma declarado é inglês, mas todo o texto da página está em português.
- Impacto: Leitores de tela podem ler o texto com a pronúncia do inglês, e o navegador pode oferecer tradução sem necessidade.
- Correção aplicada: Troquei para `lang="pt-BR"` nas três páginas.
- Situação: Corrigida

## Inconsistência 2

- Localização: `<link rel="stylesheet" href="css/styles.css">`, no `<head>`
- Problema encontrado: O HTML chama `styles.css`, mas a estrutura de pastas pede `css/style.css`.
- Impacto: O navegador não encontra o arquivo e a página abre sem o meu estilo.
- Correção aplicada: O arquivo se chama `css/style.css` e as três páginas apontam para ele.
- Situação: Corrigida

## Inconsistência 3

- Localização: `<a class="link-pular" href="#conteudo">` e `<main id="conteudo-principal">`
- Problema encontrado: O link de pular aponta para `#conteudo`, mas o `main` tem o id `conteudo-principal`. Os dois nomes não batem.
- Impacto: Quem usa teclado aperta o link e nada acontece, então o atalho para pular o menu não funciona.
- Correção aplicada: O link e o `main` usam o mesmo nome: `href="#conteudo"` e `id="conteudo"`.
- Situação: Corrigida

## Inconsistência 4

- Localização: Menu: `<a href="contatos.html">Contato</a>`
- Problema encontrado: O link aponta para `contatos.html`, mas a página se chama `contato.html`.
- Impacto: O clique em Contato leva a um erro de página não encontrada.
- Correção aplicada: O link do menu agora é `contato.html`, igual ao nome do arquivo.
- Situação: Corrigida

## Inconsistência 5

- Localização: `<section aria-labelledby="titulo-eventos">` e `<h2 id="titulo-conteudos">`
- Problema encontrado: A seção faz referência ao id `titulo-eventos`, mas o título tem o id `titulo-conteudos`.
- Impacto: A seção fica sem nome acessível, e o leitor de tela não anuncia de que região se trata.
- Correção aplicada: Em todas as seções, o `aria-labelledby` usa o mesmo id do `h2` dela (por exemplo, `titulo-cronograma`).
- Situação: Corrigida

## Inconsistência 6

- Localização: `<label for="e-mail">` e `<input id="email">`
- Problema encontrado: O `for` do label é `e-mail`, mas o id do campo é `email`.
- Impacto: O label não fica ligado ao campo: clicar no texto não coloca o cursor no campo e o leitor de tela não anuncia o nome do campo.
- Correção aplicada: O `for` e o `id` agora são iguais (`email`, `nome` e `mensagem`).
- Situação: Corrigida

## Inconsistência 7

- Localização: Campo de e-mail: `<input type="text" id="email">`
- Problema encontrado: O campo de e-mail usa `type="text"`.
- Impacto: O navegador não confere se o texto parece um e-mail e o celular não mostra o teclado com o @.
- Correção aplicada: Usei `type="email"` com `required` e `autocomplete="email"`.
- Situação: Corrigida

## Inconsistência 8

- Localização: `<textarea id="mensagem" rows="5" required>`
- Problema encontrado: O campo não tem o atributo `name`.
- Impacto: Quando o formulário é enviado, o navegador não leva o conteúdo da mensagem.
- Correção aplicada: Acrescentei `name="mensagem"` (e também `name` no nome e no e-mail).
- Situação: Corrigida

## Inconsistência 9

- Localização: Final do `<body>`: `<script src="js/bootstrap.min.js">`
- Problema encontrado: O arquivo `bootstrap.min.js` não existe na estrutura. O arquivo da pasta é `bootstrap.bundle.min.js`, que já inclui o Popper.
- Impacto: O script não carrega e os componentes do Bootstrap, como o menu e o modal, não funcionam.
- Correção aplicada: As páginas carregam `js/bootstrap.bundle.min.js`.
- Situação: Corrigida

## Inconsistência 10

- Localização: Botão da apresentação: `<a class="botao" href="#">Ver eventos</a>`
- Problema encontrado: O link tem `href="#"`, que não leva a lugar nenhum.
- Impacto: O clique só volta ao topo da página e a pessoa não chega aos eventos.
- Correção aplicada: Os links da página inicial apontam para `eventos.html#placar` e `eventos.html#cronograma`.
- Situação: Corrigida

## Inconsistência 11

- Localização: Ordem dos scripts: `script.js` vem antes de `jquery.min.js`
- Problema encontrado: O meu script é carregado antes do jQuery.
- Impacto: Se o `script.js` usar o jQuery, dá erro de que `$` não existe, porque a biblioteca ainda não carregou.
- Correção aplicada: O jQuery será carregado antes do `script.js`, que fica por último.
- Situação: Pendente — será corrigida quando o JavaScript e o jQuery entrarem

## Inconsistência 12

- Localização: `<form id="form-contato" novalidate>`
- Problema encontrado: O atributo `novalidate` desliga a validação do navegador e o esqueleto não tem JavaScript que a substitua.
- Impacto: O formulário pode ser enviado vazio ou com e-mail inválido, sem nenhum aviso.
- Correção aplicada: Tirei o `novalidate`. A validação nativa já funciona, e o JavaScript vai acrescentar as mensagens na região de status.
- Situação: Parcial — validação nativa pronta; mensagens em JavaScript pendentes

## Inconsistência 13

- Localização: `<img src="img/evento-exemplo.png" alt="Imagem do evento">`
- Problema encontrado: A imagem não tem `width` e `height`, o texto alternativo é genérico e o formato é PNG. O arquivo também não está na estrutura de pastas.
- Impacto: A página pode "pular" quando a imagem carrega, o leitor de tela não entende o que a imagem mostra e o arquivo fica mais pesado do que precisa.
- Correção aplicada: As imagens do projeto terão `alt` descrevendo o que mostram, `width`, `height` e formato WebP.
- Situação: Pendente — será corrigida quando as imagens entrarem
