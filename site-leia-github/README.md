# Agenda Digital e Portfólio LEIA

2º Ano A • Escola Lar São José • Cidade de Goiás • 2026

## 1. Abrir no computador

Extraia o ZIP primeiro. Abra a pasta `site-leia-github` e dê dois cliques em `index.html`. Ele abrirá no navegador. Mantenha os arquivos e a pasta `assets` juntos. Não precisa instalar programa, usar terminal ou ter internet para visualizar.

## 2. Publicar gratuitamente no GitHub Pages

1. Entre em https://github.com e crie uma conta, se necessário. Confirme seu e-mail.
2. Clique em **New repository**. Nome sugerido: `agenda-leia-2ano-a`. Selecione **Public** e crie o repositório.
3. Clique em **uploading an existing file** (ou **Add file → Upload files**).
4. Abra a pasta extraída no computador e arraste **o conteúdo dela**, incluindo a pasta `assets`. Não envie o ZIP nem a pasta externa inteira.
5. O `index.html`, `style.css`, `script.js`, `README.md`, `.nojekyll` e `assets` devem ficar no primeiro nível do repositório. Confirme em **Commit changes**.
6. Abra **Settings → Pages**. Em **Source**, escolha **Deploy from a branch**.
7. Em **Branch**, escolha **main**, pasta **/(root)** e clique em **Save**.
8. Aguarde a publicação. O endereço aparecerá nessa mesma tela. Abra-o para conferir.

No plano gratuito, use repositório público. Os arquivos e as fotos enviados ficarão públicos. Utilize os registros aprovados pela escola para divulgação. O pacote não contém contatos ou informações sensíveis das famílias.

Não é necessário contratar domínio, hospedagem ou usar GitHub Actions personalizado. O arquivo vazio `.nojekyll` informa que o conteúdo já está pronto. Se ele não aparecer no explorador, confira a opção de mostrar arquivos ocultos.

Instruções oficiais: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 3. O que existe na pasta

```text
index.html       — textos, nomes, seções e referências às fotos
style.css        — cores, tamanhos e adaptação ao celular
script.js        — abertura e fechamento do menu no celular
assets/images/   — logo e fotos otimizadas
README.md        — este guia
.nojekyll        — configuração do GitHub Pages (deixe como está)
```

## 4. Atualizar textos e nomes

No GitHub, abra `index.html` e clique no lápis para editar. Encontre o texto com Ctrl+F, altere somente as palavras e salve em **Commit changes**. Preserve os sinais `< >` e as partes entre eles. Faça uma alteração pequena por vez e confira o site depois.

Os nomes estão entre `<!-- EDITAR NOMES ... -->` e o final da lista `</ol>`, um por linha. Para adicionar um nome, copie uma linha `<li>Ana B. M. R.</li>` e mantenha a ordem alfabética. Use somente o primeiro nome e as iniciais de todas as demais palavras, inclusive de/da/dos. Exemplo: `Ana B. M. R.`. Nunca inclua nomes completos em texto oculto, comentários ou atributos HTML.

O texto coletivo está marcado por **TEXTO COLETIVO** e **FIM DO TEXTO COLETIVO**. A mensagem atual é um convite para produzir o texto com as crianças, não uma fala atribuída à turma. Substitua os parágrafos pelo registro real. Essa edição é feita no arquivo, não digitando diretamente na página do site.

## 5. Trocar ou acrescentar fotos

As imagens desta versão vieram do HTML original. As fotos adicionais da pasta do Drive não estão incluídas neste pacote.

| Arquivo | Conteúdo |
|---|---|
| foto-0.jpg | Foto de destaque da turma |
| foto-1.jpg | Logo da escola |
| foto-2.jpg | Quadro com textos e cartaz |
| foto-3.jpg | Participação de estudante no quadro |
| foto-4.jpg | Registro escrito |
| foto-5.jpg | Produção colorida |
| foto-6.jpg | Desenho apresentado em tela |
| foto-7.jpg | Momento coletivo da escola |

Para substituir uma foto, use uma imagem JPG com o mesmo nome e envie para **assets/images** no GitHub, usando **Add file → Upload files**. Atualize também a descrição `alt`, a legenda e os valores `width`/`height` em `index.html`, caso a nova imagem tenha outras dimensões. Se preferir, remova apenas os atributos `width` e `height` da imagem substituída; ela continuará responsiva.

Para adicionar uma foto, envie o JPG para `assets/images`, com nome simples, sem espaços ou acentos, por exemplo `montagem-agenda.jpg`. Dentro da galeria desejada em `index.html`, copie um bloco `<figure>...</figure>` e ajuste assim:

```html
<figure>
  <img src="assets/images/montagem-agenda.jpg"
       alt="Descreva aqui o que aparece na foto"
       loading="lazy" decoding="async">
  <figcaption>Escreva uma legenda curta.</figcaption>
</figure>
```

Prefira imagens com até 1500 pixels no lado maior e aproximadamente 300 KB ou menos. O caminho deve começar por `assets/images/`, nunca por `C:\` ou pelo endereço de uma pasta do Drive. Letras maiúsculas e minúsculas precisam coincidir com o nome do arquivo.

## 6. Acrescentar uma vivência

Em `index.html`, procure **INÍCIO DO MODELO**. Copie todo o bloco `<article class="next-card">...</article>` e cole logo depois do original, dentro de `<div class="next-grid">`. Troque número, título e parágrafo. Você pode inserir um bloco de foto como no exemplo acima dentro do novo artigo. Não repita os identificadores `id` das seções.

## 7. QR Code da agenda

Gere o QR Code somente depois de copiar o endereço definitivo mostrado em **Settings → Pages**. Use esse endereço completo, nunca o endereço da página do repositório no GitHub nem o arquivo do computador.

O mesmo QR Code continua funcionando depois de atualizar textos e fotos, desde que você mantenha o endereço do site. Evite mudar seu nome de usuário ou o nome do repositório após imprimir. Antes de imprimir a tiragem, teste um exemplar pelo celular, com boa margem branca ao redor do código.

## 8. Se algo não aparecer

- Página 404: confira se o `index.html` está na raiz e se Pages está configurado em `main` e `/(root)`.
- Foto não carrega: confira o nome exato, a extensão e a pasta `assets/images`.
- Site sem cores: confira se `style.css` foi enviado junto de `index.html`.
- Alteração não aparece: aguarde a publicação terminar e atualize a página. No computador, tente Ctrl+F5.

Todo o conteúdo pode ser lido sem JavaScript. O script serve apenas ao menu compacto no celular. Nenhum dado é enviado por formulário ou armazenado em servidor por este site.
