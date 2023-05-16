import Cuentas from "./padre.js";

export default class Normal extends Cuentas {
    constructor(correo, password, usuario){
        super(correo, password);
        this.usuario = usuario;
    }

    datos(){
        return {
            correo: this.correo,
            password: this.password,
            usuario: this.usuario
        }
    }
}

