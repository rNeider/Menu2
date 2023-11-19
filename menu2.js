document.querySelector('.menuBarra').addEventListener("click",animacionMenu)//para que coja todos lo que esta en menubarra para que funcione sin importar en que fila hagamos click,estamos llamando a la funcion animacionMenu
let barra1 = document.querySelector('.fila1')
let barra2 = document.querySelector('.fila2') // guardamos las filas en las variables barras
let barra3 = document.querySelector('.fila3')

function animacionMenu(){
    barra1.classList.toggle('fila1Animacion')
    barra2.classList.toggle('fila2Animacion')//creamos la funcion y le damos toggle para la animacion
    barra3.classList.toggle('fila3Animacion')

}