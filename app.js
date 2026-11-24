// Filtro do catálogo
const campoBusca = document.querySelector('#busca');
const itensLivros = document.querySelectorAll('.lista-livros li');
const semResultados = document.querySelector('#sem-resultados');

campoBusca.addEventListener('input', () => {
  const termo = campoBusca.value.trim().toLocaleLowerCase();
  let visiveis = 0;

  itensLivros.forEach((item) => {
    const titulo = item.querySelector('h3').textContent.toLocaleLowerCase();
    const corresponde = titulo.includes(termo);
    item.hidden = !corresponde;
    if (corresponde) visiveis++;
  });

  semResultados.hidden = visiveis > 0;
});

// Validação do formulário
const formulario = document.querySelector('#form-sugestao');
const campoTitulo = document.querySelector('#titulo');
const mensagem = document.querySelector('#mensagem');

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();

  const titulo = campoTitulo.value.trim();

  if (titulo.length < 3) {
    mensagem.textContent = 'O título do livro deve ter pelo menos 3 caracteres.';
    mensagem.className = 'mensagem erro';
    campoTitulo.focus();
    return;
  }

  mensagem.textContent = `Obrigado! A sugestão "${titulo}" foi registrada.`;
  mensagem.className = 'mensagem sucesso';
  formulario.reset();
});
