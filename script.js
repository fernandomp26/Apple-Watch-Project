const descricao = document.getElementById('descricao-titulo');
const colorName = document.getElementById('color-name');
const preco = document.getElementById('preco');
const botaoSize41 = document.getElementById('size-button-41');
const botaoSize45 = document.getElementById('size-button-45');
let corSelecionada = 'verde-cipreste';
let size = 41;

function setDescicao41() {
   descricao.innerText = 'Pulseira loop esportiva ' + corSelecionada + ' para caixa de 41 mm';
   preco.innerText = 'R$499,00';
   size = 41;
   botaoSize41.classList.add('selected');
   botaoSize45.classList.remove('selected');
};

function setDescicao45() {
   descricao.innerText = 'Pulseira loop esportiva ' + corSelecionada + ' para caixa de 45 mm';
   preco.innerText = 'R$549,99';
   size = 45;
   botaoSize45.classList.add('selected');
   botaoSize41.classList.remove('selected');
};
botaoSize41.addEventListener('click', setDescicao41);
botaoSize45.addEventListener('click', setDescicao45);

let imgSelecionada = '/imagens-verde-cipreste';
const img = document.getElementById('img-selecionada');
const img1 = document.getElementById('img-1');
const img2 = document.getElementById('img-2');
const img3 = document.getElementById('img-3');

const botaoVerde = document.getElementById('verde');
const botaoAzul = document.getElementById('azul');
const botaoNoite = document.getElementById('noite');
const botaoEstelar = document.getElementById('estelar');
const botaoRosa = document.getElementById('rosa');

function setOpcoesImgVerde() {
   corSelecionada = 'verde-cipreste';
   if(size === 41) {
      setDescicao41();
   }
   else{
      setDescicao45();
   }
   colorName.innerText = 'Cor - Verde-cipreste';
   img.src = './imagens/opcoes-cores/imagens-verde-cipreste/imagem-1.jpg';
   img1.src = './imagens/opcoes-cores/imagens-verde-cipreste/imagem-1.jpg'
   img2.src = './imagens/opcoes-cores/imagens-verde-cipreste/imagem-2.jpg'
   img3.src = './imagens/opcoes-cores/imagens-verde-cipreste/imagem-3.jpg';
   imgSelecionada = '/imagens-verde-cipreste';
   botaoVerde.classList.add('selected');
   botaoAzul.classList.remove('selected');
   botaoEstelar.classList.remove('selected');
   botaoNoite.classList.remove('selected');
   botaoRosa.classList.remove('selected');
};
botaoVerde.addEventListener('click', setOpcoesImgVerde);


function setOpcoesImgAzul() {
   corSelecionada = 'azul-inverno';
   if(size === 41) {
      setDescicao41();
   }
   else{
      setDescicao45();
   }
   colorName.innerText = 'Cor - Azul-inverno';
   img.src = './imagens/opcoes-cores/imagens-azul-inverno/imagem-1.jpg';
   img1.src = './imagens/opcoes-cores/imagens-azul-inverno/imagem-1.jpg';
   img2.src = './imagens/opcoes-cores/imagens-azul-inverno/imagem-2.jpg';
   img3.src = './imagens/opcoes-cores/imagens-azul-inverno/imagem-3.jpg';
   imgSelecionada = '/imagens-azul-inverno';
   botaoAzul.classList.add('selected');
   botaoEstelar.classList.remove('selected');
   botaoNoite.classList.remove('selected');
   botaoRosa.classList.remove('selected');
   botaoVerde.classList.remove('selected');
};
botaoAzul.addEventListener('click', setOpcoesImgAzul);


function setOpcoesImgEstelar() {
   corSelecionada = 'estelar';
   if(size === 41) {
      setDescicao41();
   }
   else{
      setDescicao45();
   }
   colorName.innerText = 'Cor - Estelar';
   img.src = './imagens/opcoes-cores/imagens-estelar/imagem-1.jpg';
   img1.src = './imagens/opcoes-cores/imagens-estelar/imagem-1.jpg';
   img2.src = './imagens/opcoes-cores/imagens-estelar/imagem-2.jpg';
   img3.src = './imagens/opcoes-cores/imagens-estelar/imagem-3.jpg';
   imgSelecionada = '/imagens-estelar';
   botaoEstelar.classList.add('selected');
   botaoAzul.classList.remove('selected');
   botaoNoite.classList.remove('selected');
   botaoRosa.classList.remove('selected');
   botaoVerde.classList.remove('selected');
};
botaoEstelar.addEventListener('click', setOpcoesImgEstelar);


function setOpcoesImgNoite() {
   corSelecionada = 'meia-noite';
   if(size === 41) {
      setDescicao41();
   }
   else{
      setDescicao45();
   }
   colorName.innerText = 'Cor - Meia-noite';
   img.src = './imagens/opcoes-cores/imagens-meia-noite/imagem-1.jpg';
   img1.src = './imagens/opcoes-cores/imagens-meia-noite/imagem-1.jpg';
   img2.src = './imagens/opcoes-cores/imagens-meia-noite/imagem-2.jpg';
   img3.src = './imagens/opcoes-cores/imagens-meia-noite/imagem-3.jpg';
   imgSelecionada = '/imagens-meia-noite';
   botaoNoite.classList.add('selected');
   botaoAzul.classList.remove('selected');
   botaoEstelar.classList.remove('selected');
   botaoRosa.classList.remove('selected');
   botaoVerde.classList.remove('selected');
};
botaoNoite.addEventListener('click', setOpcoesImgNoite);


function setOpcoesImgRosa() {
   corSelecionada = 'rosa-claro';
   if(size === 41) {
      setDescicao41();
   }
   else{
      setDescicao45();
   }
   colorName.innerText = 'Cor - Rosa-claro';
   img.src = './imagens/opcoes-cores/imagens-rosa-claro/imagem-1.jpg';
   img1.src = './imagens/opcoes-cores/imagens-rosa-claro/imagem-1.jpg';
   img2.src = './imagens/opcoes-cores/imagens-rosa-claro/imagem-2.jpg';
   img3.src = './imagens/opcoes-cores/imagens-rosa-claro/imagem-3.jpg';
   imgSelecionada = '/imagens-rosa-claro';
   botaoRosa.classList.add('selected');
   botaoAzul.classList.remove('selected');
   botaoEstelar.classList.remove('selected');
   botaoNoite.classList.remove('selected');
   botaoVerde.classList.remove('selected');
};
botaoRosa.addEventListener('click', setOpcoesImgRosa);


function mudarFoto1() {
   img.src = './imagens/opcoes-cores'+ imgSelecionada +'/imagem-1.jpg';
};

function mudarFoto2() {
   img.src = './imagens/opcoes-cores'+ imgSelecionada +'/imagem-2.jpg';
};

function mudarFoto3() {
   img.src = './imagens/opcoes-cores' + imgSelecionada + '/imagem-3.jpg';
};

img1.addEventListener('click', mudarFoto1);
img2.addEventListener('click', mudarFoto2);
img3.addEventListener('click', mudarFoto3);