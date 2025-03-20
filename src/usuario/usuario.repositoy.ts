import { Injectable } from "@nestjs/common"

@Injectable()
export class UsuarioRepositoy {
    private usuarios: any[] = []

    async salvar(usuario) {
        this.usuarios.push(usuario)
        console.log(this.usuarios)
    }

    async listar() {
        return this.usuarios
    }
    
    async existeComEmail(email: string) {
        const possivelUsuario = this.usuarios.find(
            usuario => usuario.email === email
        )

        return possivelUsuario !== undefined
    }

}