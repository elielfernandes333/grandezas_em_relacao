//telas
let telaMenu;
let telaSobre;
let telaCreditos;
let telaGithub;
//botoes
let botaoPlay;
let botaoSobre;
let botaoCreditos;
let botaoGithub;
let botaoVoltar;
let mark;
//animação botoes
let intervaloPiscar;
let isShowingImage = true;


function preload(){
  telaMenu = loadImage("./imgs/background.jpg");
  telaSobre = loadImage("./imgs/backgroundsobre.jpg");
  //botoes
  mark = loadImage("./imgs/mark.png")
  botaoPlay = loadImage("./imgs/play.jpg");
  botaoSobre = loadImage("./imgs/about.jpg");
  botaoCreditos = loadImage("./imgs/about.jpg");
  botaoCreditos = loadImage("./imgs/creditos.jpg");
  botaoGithub = loadImage("./imgs/github.jpg");
  botaoVoltar = loadImage("./imgs/voltar.jpg");
}

function setup() {
  createCanvas(800, 568);
  // intervalo de animação para 500ms(0.5 seg)

  intervaloPiscar = setInterval
  (changeVisibility, 750);
}
function changeVisibility() {
  isShowingImage = !isShowingImage;
}

function draw() {
  background(telaMenu);
  //mouse
  text(mouseX  + ":" + mouseY, 20,20);
  if(isShowingImage){
    //exibe as imagens
    image(botaoPlay, 200, 250);
    image(botaoSobre, 400, 250);
    image(botaoCreditos, 200, 315);
    image(botaoGithub, 400, 315);
  }
  //botaoplayaction
  if(mouseX >= 200 && mouseX <= 360 && mouseY >= 250 && mouseY<= 290){
    image(mark, 200, 240);
    isShowingImage = true;
  }
  if(mouseX >= 400 && mouseX <= 560 && mouseY >= 250 && mouseY <= 290){
    image(mark, 400, 240)
    isShowingImage = true;
  }
  if(mouseX >= 200 && mouseX <= 360 && mouseY >= 315 && mouseY <=355){
    image(mark, 200, 305)
    isShowingImage = true;
  }
  if(mouseX >= 400 && mouseX <= 560 && mouseY >= 315 && mouseY <=355){
    image(mark, 400, 305)
    isShowingImage = true;
  }
}

