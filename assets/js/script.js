import Vip from "./Clases/vip.js";
import Normal from "./Clases/normal.js";

//Modal ID
let welcome = document.getElementById("welcome");
let welcomeBody = document.getElementById("welcomeBody");

//Vip User
let botonVip = document.getElementById("vipButton")

let usuarioVip = (event) => {
    event.preventDefault();
    let pass2 = document.getElementById("pass2").value;
    let user = document.getElementById("user").value;
    let email2 = document.getElementById("email2").value;
    
    let usuarioNuevo = new Vip(email2, pass2, user);
    let {correo, password, usuario} = usuarioNuevo.obtenerDatos();
    
    welcome.innerText = `Bienvenido ${usuario}`
    welcomeBody.innerText = `Usuario: ${usuario} Email: ${correo} Password: ${password}`
    
};

botonVip.addEventListener("click", usuarioVip)

//Normal User
let botonNormal = document.getElementById("bm");

let usuarioNormal = () => {
    let email1 = document.getElementById("email1").value;
    let pass1 = document.getElementById("pass1").value;
    let randomUser = "Usuario" + Math.floor(Math.random() * 100) + 1;
    let newUser = new Normal(email1, pass1, randomUser);

    let {correo, password, usuario} = newUser.datos();

    welcome.innerText = `Bienvenido ${usuario}`
    welcomeBody.innerText = `Email: ${correo} Password: ${password}`

};

botonNormal.addEventListener("click", usuarioNormal)






