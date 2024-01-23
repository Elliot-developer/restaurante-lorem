let imgAtual = 0;
let indexComment = 0;

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

const updateComment = () => {
    const listaComentarios = {"Elisa Graf":"Fiz meu primeiro pedido no Lorem e já virei fã. Bom atendimento, entrega super pontual e comida deliciosa.",
     "Silvania Yamamoto": "Estou super satisfeita com as marmitinhas. A cada pedido experimento novos sabores. O atendimento é excelente e, facilitou muito inha rotina para manter minha alimentação saudável.",
      "Marlene Pires": "Maravilhosa, super indico, recomendo. Meus pedidos chegaram bem certinho, com opção de pagamento na hora da entrega!", 
      "Cris Martins": "Excelente cardápio (pratos, pizzas, sobremesas) a comida é super saudável, recomendo com nota 100. Estou perdendo peso (até agora 1,8kg em 30 dias) de forma equilibrada, sem sacrifício."};
    const nomePessoa = document.getElementById("pessoa"); 
    const comentario = document.getElementById("recText");
    
    let nomes =  Object.keys(listaComentarios);
    indexComment+=1;

    if(indexComment>=nomes.length) indexComment = 0;

    nomePessoa.textContent = nomes[indexComment];
    comentario.textContent = listaComentarios[nomes[indexComment]];
}

setInterval(updatePainel, 3000);
setInterval(updateComment, 3000);