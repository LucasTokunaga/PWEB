window.onload = () => {
    const titulo = document.getElementById("titulo");
    const imagem = document.getElementById("imagem");
  
    imagem.src = "./src/img/janela-fechada.webp";
    titulo.innerHTML = "Janela Fechada";
  
    imagem.onclick = () => {
      imagem.src = "./src/img/janela-quebrada.jpg";
      titulo.innerHTML = "Janela Quebrada";
    };
  
    imagem.onmouseover = () => {
      imagem.src = "./src/img/janela-aberta.jpg";
      titulo.innerHTML = "Janela Aberta";
    };

    imagem.onmouseout = () => {
      imagem.src = "./src/img/janela-fechada.webp";
      titulo.innerHTML = "Janela Fechada";
    };
  }