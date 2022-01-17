window.addEventListener('load',()=>{
    botones()
       
})
var sesion= document.querySelector('#navCerrar')    
var nav= document.querySelector('#navUsuario')
var perfilBtn= document.getElementById('perfilLink')
var deseadosBtn= document.getElementById('deseadoLink')
var botoncito =document.getElementById('burger')
var menu = document.getElementById('navReg')
botoncito.addEventListener('click',()=>{
    menu.classList.toggle('is-active');
})
function botones (){
    if(localStorage.getItem('Token')){
        nav.classList.add('is-hidden')
        sesion.classList.remove('is-hidden')
    }else{
        perfilBtn.classList.add('is-hidden')
        deseadosBtn.classList.add('is-hidden')
    }
}
sesion.addEventListener('click',()=>{
    localStorage.removeItem('Token')  
    botones()  
})