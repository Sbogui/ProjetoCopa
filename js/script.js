// Copa Senac Hackathon - scripts do portal

// ----- formulário de contato (contato.html) -----
const formulario = document.querySelector('#form-contato');

if (formulario) {
  const nome = document.querySelector('#nome');
  const email = document.querySelector('#email');
  const mensagem = document.querySelector('#mensagem');
  const status = document.querySelector('#status-contato');
  const campos = [nome, email, mensagem];

  // com JavaScript a validação é feita aqui; sem ele o navegador valida
  formulario.setAttribute('novalidate', '');

  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const erros = [];
    let primeiroErro = null;

    function marcarErro(campo, texto) {
      campo.setAttribute('aria-invalid', 'true');
      erros.push(texto);
      if (primeiroErro === null) {
        primeiroErro = campo;
      }
    }

    for (const campo of campos) {
      campo.removeAttribute('aria-invalid');
    }

    if (nome.value.trim() === '') {
      marcarErro(nome, 'Preencha o nome.');
    }

    if (email.value.trim() === '') {
      marcarErro(email, 'Preencha o e-mail.');
    } else if (!email.value.includes('@') || !email.value.includes('.')) {
      marcarErro(email, 'Digite um e-mail válido, como nome@exemplo.com.');
    }

    if (mensagem.value.trim() === '') {
      marcarErro(mensagem, 'Escreva a mensagem.');
    }

    if (erros.length > 0) {
      status.textContent = 'Não foi possível enviar. ' + erros.join(' ');
      primeiroErro.focus();
      return;
    }

    status.textContent = 'Mensagem enviada com sucesso. Este envio é só uma simulação.';
    formulario.reset();
  });
}

// ----- busca de equipe no placar (eventos.html) -----
const areaBusca = document.querySelector('#area-busca');

if (areaBusca) {
  const campoBusca = document.querySelector('#busca-equipe');
  const statusBusca = document.querySelector('#status-busca');
  const linhas = document.querySelectorAll('#placar tbody tr');

  // a busca só aparece se o JavaScript estiver funcionando
  areaBusca.hidden = false;

  campoBusca.addEventListener('input', function () {
    const texto = campoBusca.value.trim().toLowerCase();
    let encontradas = 0;

    for (const linha of linhas) {
      const equipe = linha.querySelector('th').textContent.toLowerCase();

      if (equipe.includes(texto)) {
        linha.hidden = false;
        encontradas++;
      } else {
        linha.hidden = true;
      }
    }

    if (texto === '') {
      statusBusca.textContent = '';
    } else if (encontradas === 0) {
      statusBusca.textContent = 'Nenhuma equipe encontrada.';
    } else {
      statusBusca.textContent = encontradas + ' de ' + linhas.length + ' equipes encontradas.';
    }
  });
}
