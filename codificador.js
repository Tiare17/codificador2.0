var textoIngresado = document.querySelector('#texto_ingreso');
var encriptar = document.querySelector("#encriptar");
var desencriptar = document.querySelector("#desencriptar");
var textoACopiar = document.querySelector("#texto_copiar");
var copiar = document.querySelector("#copiar");
var inicio = document.querySelector("#inicio");
var vocales = ["e","i","a","o","u"];
var cambioVocales = ["enter","imes","ai","ober","ufat"];
var textoCodificado=0;
var textoDecodificado=0;

function ocultar_muneco(){
    document.getElementById("muneco").style.display = "none";
    document.getElementById("resultado").style.display = "block";
}
function ocultar_resultado(){
    document.getElementById("muneco").style.display = "block";
    document.getElementById("resultado").style.display = "none";
}

function codificador(){
    texto = textoIngresado.value;
    
    for (posicion=0;posicion<=vocales.length;posicion++){
        
        if (texto.includes(vocales[posicion])){
            texto = texto.replaceAll(vocales[posicion],cambioVocales[posicion]);
        }
    }
    textoCodificado=texto;
    
    document.getElementById("texto_copiar").value = textoCodificado;
    textoIngresado.value="";
    ocultar_muneco();
}

encriptar.onclick = codificador;

function copia(){
    textoACopiar.select();
    document.execCommand("copy");
    textoACopiar.value="";
    textoIngresado.focus();
    ocultar_resultado();
    window.alert("El texto a sido copiado, presione CTRL+V ó CMD+V para macOS")
}

copiar.onclick=copia;

function decodificador(){
    for (posicion=0;posicion<=cambioVocales.length;posicion++){
        
        if (textoCodificado.includes(cambioVocales[posicion])){
            textoCodificado=textoCodificado.replaceAll(cambioVocales[posicion],vocales[posicion]);
            
        }
    }
    textoDecodificado=textoCodificado;
    
    document.getElementById("texto_copiar").value = textoDecodificado;
    textoIngresado.value="";
    ocultar_muneco();
}

desencriptar.onclick = decodificador;

function volver(){
    textoIngresado.focus();
    ocultar_resultado();
}

inicio.onclick = volver;

