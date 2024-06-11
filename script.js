function calcular() {
    event.preventDefault();
    const resultado = document.getElementById("resultado");
    const nome = document.getElementById("nome").value;
    const xp = document.getElementById("xp").value;
    const section = document.getElementById("section");

    let nivel;
    let textoResultado;

    if(xp < 0) {
        textoResultado = "Não é possível utilizar números menores que 0";
        section.style.backgroundColor = "rgb(255, 236, 195)";
        return resultado.innerText = textoResultado;
    } else if (xp <= 1000) {
        nivel = "Ferro"
        section.style.backgroundColor = "rgb(173, 173, 173)";
    } else if (xp <= 2000) {
        nivel = "Bronze"
        section.style.backgroundColor = "rgb(226, 153, 17)";
    }  else if (xp <= 5000) {
        nivel = "Prata"
        section.style.backgroundColor = "rgb(224, 224, 224)";
    }  else if (xp <= 7000) {
        nivel = "Ouro"
        section.style.backgroundColor = "rgb(255, 215, 39)";
    }  else if (xp <= 8000) {
        nivel = "Platina"
        section.style.backgroundColor = "rgb(212, 212, 212)";
    }  else if (xp <= 9000) {
        nivel = "Ascendente"
        section.style.backgroundColor = "rgb(162, 236, 255)";
    }  else if (xp <= 10000) {
        nivel = "Imortal"
        section.style.backgroundColor = "rgb(234, 197, 255)";
    } else {
        nivel = "Radiante"
        section.style.backgroundColor = "rgb(88, 255, 125)";
    }

    textoResultado = nome + " é um herói de nível " + nivel;
    resultado.innerText = textoResultado;
}