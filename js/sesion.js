const usuario = "" ;
const contraseña = "" ;
const btnIS = document.getElementById("btnIS").addEventListener("click", inicioSesion) ;
const arrayUsuarios = [""] ;
const arrayContraseñas = [""] ;
const datosUsuarios = [""] ;




JSON.parse(localStorage.getItem("DatosUsuarios")) ;
JSON.parse(localStorage.getItem("arrayUsuarios")) ;
JSON.parse(localStorage.getItem("arrayContraseñas")) ;


function inicioSesion() {
    const usuario = document.getElementById("usuario").value.toLowerCase() ;
    const contraseña = document.getElementById("contraseña").value.toLowerCase() ;
    const resultadoUsuario = arrayUsuarios.some( arrayUsuarios => arrayUsuarios  === usuario ) ;
    const resultadoContraseña = arrayContraseñas.some( arrayContraseñas => arrayContraseñas  === contraseña ) ;

    if ( resultadoUsuario === true && resultadoContraseña === true ){
        window.location="usuarios.html"; 
    }else if( resultadoUsuario === true && resultadoContraseña === false ){

    }else if( resultadoUsuario === false && resultadoContraseña === true ){

    }else{

    }
}