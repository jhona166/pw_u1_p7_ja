function cambiarColor(idelemento,color) {
    document.getElementById(idelemento).style.color=color;
}
function cambiarTamanio(idelemento,tamanio){
    document.getElementById(idelemento).style.fontSize=tamanio;
}
function cambiarFuente(idelemento,fuente){
    document.getElementById(idelemento).style.fontFamily=fuente;
}
function cambiarImagen(idelemento,img1){
    document.getElementById(idelemento).src=img1;
}
function agregarElemento(idelemento,elementohtml){
    document.getElementById(idelemento).innerHTML=document.getElementById(idelemento).innerHTML+elementohtml;
}
