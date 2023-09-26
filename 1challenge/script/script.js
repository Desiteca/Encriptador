/* Encriptador/descriptador de texto que cambiara:
 La letra "e" es convertida para "enter"
 La letra "i" es convertida para "imes"
 La letra "a" es convertida para "ai"
 La letra "o" es convertida para "ober"
 La letra "u" es convertida para "ufat"*/

//Parte de encriptar el texto

function encriptar() {

    let frase=document.getElementById("mensaje").value;
    console.log(frase);

    if (frase == null || frase.length == 0 || /^\s+$/.test(frase)) {
        alert("Se necesita una frase para encriptar");
    } else{
        frase = frase.replaceAll("e", "enter");
        frase = frase.replaceAll("i", "imes");
        frase = frase.replaceAll("a", "ai");
        frase = frase.replaceAll("o", "ober");
        frase = frase.replaceAll("u", "ufat");

        document.getElementById("cuadrodeTexto").style.display = "none";

        document.getElementById("cuadroOculto").style.display = "inline-flex";

        document.getElementById("copiar").style.display = "block"; 
    }
        
    let textoOculto = document.getElementById("textoOculto");

    textoOculto.textContent = frase;
        
}

//Parte de desencriptar el texto 

function desencriptar() {

    let frase=document.getElementById("mensaje").value;
    console.log(frase);

    if (frase == null || frase.length == 0 || /^\s+$/.test(frase)) {
        alert("Se necesita una frase para desencriptar");
    }else{
        frase = frase.replaceAll("enter", "e");
        frase = frase.replaceAll("imes", "i");
        frase = frase.replaceAll("ai", "a");
        frase = frase.replaceAll("ober", "o");
        frase = frase.replaceAll("ufat", "u");

        document.getElementById("cuadrodeTexto").style.display = "none";

        document.getElementById("cuadroOculto").style.display = "block";

        document.getElementById("copiar").style.display = "block"; 
    }
    
    let textoOculto = document.getElementById("textoOculto");
    
    textoOculto.textContent = frase;

}

// Parte de copiar

document.getElementById("copiar").style.display = "none";

function copiar() {
  
    let elemento = document.getElementById("textoOculto");
    let texto = elemento.textContent;

    navigator.clipboard.writeText(texto).then(() => {
          /* clipboard successfully set */
    }, () => {
          /* clipboard write failed */
    });
}
  

