function creditos(){
    if(tela == 3){
        background(telaCreditos);
        if(isShowingImage){
            image(botaoVoltar, 320, 500);
        }
        if(mouseX >= 300 && mouseX <= 500 && mouseY >= 450 && mouseY <= 550){
            image(mark, 320, 490);
            isShowingImage = true;
            if(mouseIsPressed){
                tela = 0;
            }
        }
    }
}