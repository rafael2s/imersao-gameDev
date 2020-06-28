function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
  fontTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  imagemVida = loadImage('imagens/assets/coracao.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  cartucho = loadJSON('cartucho/cartucho.json');
  somDoJogo = loadSound("sons/trilha_jogo.mp3");
  somPulo = loadSound("sons/somPulo.mp3");
}