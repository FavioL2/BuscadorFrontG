window.addEventListener('load',()=>{
    if(!localStorage.getItem('Token')){
        alert("Debe estar logeado para entrar a esta página")
        window.location.replace('./inicio.html')
    }
    obtenerUsuario()
})
const url = "https://pure-peak-37709.herokuapp.com/"

function obtenerUsuario(){
    fetch(url,{
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        "Authorization" :localStorage.getItem('Token'),
        'Accept': 'application/json',
    },
    "body": JSON.stringify({
        query :`
        {
            leerUsuario{
                 nombre,
                 apellido,
                 email
               } 
            }`
        }
    )
  })
    .then(r => r.json())
    .then(usuario => agregarCampos(usuario.data.leerUsuario))
    .catch(error=>console.log(error.message))
  }

  function agregarCampos(campos){
    let campoCorreo = document.getElementById('campoCorreo')
    let campoApellido = document.getElementById('campoApellido')
    let campoNombre= document.getElementById('campoNombre')
    campoApellido.innerHTML = campos.apellido
    campoCorreo.innerHTML = campos.email
    campoNombre.innerHTML = campos.nombre
  }