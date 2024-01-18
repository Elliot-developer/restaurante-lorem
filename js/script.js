
let imgAtual = 0;

const updatePainel = () => {
    let fileNames = ["/imgs/PainelPrincipal.jpg", "/imgs/FreteGratis.png", "/imgs/descontos50.png", "/imgs/loremBanner.png", "/imgs/ofertaEspecial.png"];
    const imagemPainel1 = document.getElementById('imagemPainel1');
    const imagemPainel2 = document.getElementById('imagemPainel2');
    imgAtual += 1;
    if(imgAtual>=fileNames.length) imgAtual = 0;
    imagemPainel1.src = fileNames[imgAtual];
    imagemPainel2.src = fileNames[[0, imgAtual+1][Number(imgAtual+1<fileNames.length)]];

    console.log('cuzin');
}

setInterval(updatePainel, 3000);