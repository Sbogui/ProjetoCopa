# Copa Senac Hackathon — portal mobile-first

Portal mobile-first para acompanhar uma competição de tecnologia fictícia, a **Copa Senac Hackathon**. Projeto da disciplina Desenvolvimento Web Mobile (UC15), do curso Técnico em Desenvolvimento de Sistemas do Senac.

O mesmo produto evolui ao longo do semestre: primeiro um protótipo escrito à mão em HTML, CSS e JavaScript, depois com Bootstrap, auditado em acessibilidade, SEO e desempenho, e por fim portado para WordPress e coberto por testes automatizados.

## Objetivo

Permitir que participantes, mentores e espectadores acompanhem a Copa Senac Hackathon pelo celular, com cronograma das rodadas, resultados e placar geral em um só lugar, de forma rápida e acessível.

## Público

Participantes, mentores e espectadores que consultam informações rápidas, em geral pelo celular e em movimento. O portal também deve funcionar no desktop, por teclado e com leitor de tela.

## Três tarefas críticas

O portal só está pronto quando a pessoa consegue, em 320px, no desktop, por teclado e em celular real:

1. Consultar o placar geral e a pontuação da última rodada.
2. Encontrar as próximas rodadas e o desempenho de uma equipe específica, por busca ou filtro.
3. Enviar uma mensagem à organização pela página de contato, em um formulário com rótulos, instruções, validação e mensagem de resultado.

## Fora do escopo

- Inscrição real de equipes e pagamentos.
- Envio e avaliação de projetos.
- Transmissão ao vivo.
- Contas de usuário e login.
- Dados e resultados de eventos reais.
- Aplicativo nativo.

## Conteúdo e autoria

Todo o conteúdo (equipes, rodadas, notícias e resultados) é fictício. O nome "Copa Senac" é usado apenas como tema deste trabalho acadêmico. O projeto não tem vínculo oficial com o Senac e não usa o logotipo nem a identidade visual da instituição.

## Como abrir

O portal é HTML estático e não precisa de instalação. O Bootstrap 5.3.8 já está na pasta do projeto (`css/` e `js/`), sem depender de internet.

```bash
git clone https://github.com/Sbogui/ProjetoCopa.git
cd ProjetoCopa
```

Abra `index.html` no navegador (duplo clique no arquivo) ou, no PowerShell, rode `start index.html`.

## Como testar

Ainda não há testes automatizados (previstos no T11). Os testes manuais ficam em [TESTES.md](TESTES.md), e a verificação do T01 está em [docs/evidencias/t01-verificacao.md](docs/evidencias/t01-verificacao.md).

## Como gerar a entrega

Não há build: o portal é HTML, CSS e JavaScript prontos. A entrega é a própria pasta do projeto, publicada com GitHub Pages. Para marcar a versão final, depois dos testes:

```bash
git tag v1.0.0
git push --tags
```

## Estado do projeto

O trabalho segue as tarefas T00 a T12 descritas em [PROJETO-UC15-HTML-MOBILE-FIRST.md](PROJETO-UC15-HTML-MOBILE-FIRST.md). O quadro de entrega nesse arquivo mostra o que já foi concluído.

## Licença

Todos os direitos reservados. Veja o arquivo [LICENSE](LICENSE). Componentes de terceiros, como Bootstrap e jQuery, mantêm suas próprias licenças (a do Bootstrap está em [LICENSE-bootstrap.txt](LICENSE-bootstrap.txt)).

## Autor

Lucas Miranda Fernandez
