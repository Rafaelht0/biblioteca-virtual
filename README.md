# 📚 Biblioteca Virtual

Landing page de uma biblioteca virtual, feita como exercício prático integrador de Desenvolvimento Web. A página exibe um catálogo de livros com busca em tempo real e um formulário para sugerir novas aquisições, separando estrutura (HTML), apresentação (CSS) e comportamento (JavaScript).

## Funcionalidades

- **Catálogo de livros** em grade responsiva
- **Busca em tempo real** pelo título do livro
- **Formulário de sugestões** com validação (título com no mínimo 3 caracteres) e mensagem de erro ou sucesso
- **Layout responsivo**: o menu empilha e as margens se ajustam em telas pequenas

## Tecnologias

| Camada | Tecnologia | Destaques |
|---|---|---|
| Estrutura | HTML5 | Tags semânticas (`header`, `nav`, `main`, `section`, `footer`, `article`), `label for` associado aos campos |
| Apresentação | CSS3 | Variáveis em `:root`, `box-sizing: border-box`, Flexbox no menu, Grid com `repeat(auto-fit, minmax(...))`, Media Queries |
| Comportamento | JavaScript | Script com `defer`, evento `input` com `toLocaleLowerCase()` e `hidden`, evento `submit` com `preventDefault()` e `textContent` |

## Estrutura do projeto

```
├── index.html   # Estrutura da página
├── style.css    # Estilos e layout responsivo
└── app.js       # Filtro do catálogo e validação do formulário
```

## Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/Rafaelht0/Rafaelht0-biblioteca-virtual.git
   ```
2. Abra o arquivo `index.html` no navegador.

Não há dependências nem etapa de build.

## Autor

**Helton Rafael Ferreira da Silva** · [@Rafaelht0](https://github.com/Rafaelht0)
