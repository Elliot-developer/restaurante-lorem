let imgAtual = 0;

const updatePainel = () => {
    let fileNames = ["/imgs/painel/PainelPrincipal.jpg", "/imgs/painel/FreteGratis.png", "/imgs/painel/descontos50.png", "/imgs/painel/loremBanner.png", "/imgs/painel/ofertaEspecial.png"];
    const imagemPainel1 = document.getElementById('imagemPainel1');
    imgAtual += 1;
    if(imgAtual>=fileNames.length) imgAtual = 0;
    imagemPainel1.src = fileNames[imgAtual];

    // Teste
    // const imagemPainel2 = document.getElementById('imagemPainel2');
    // imagemPainel2.src = fileNames[[0, imgAtual+1][Number(imgAtual+1<fileNames.length)]];
}

setInterval(updatePainel, 3000);