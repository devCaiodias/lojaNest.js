import { Injectable } from "@nestjs/common"
import { UsuarioEntity } from "./usuario.entity"
import { error } from "console"

@Injectable()
export class UsuarioRepositoy {
    private usuarios: UsuarioEntity[] = []

    async salvar(usuario: UsuarioEntity) {
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

    async atualiza(id: string, dadosDeAtualizacao: Partial<UsuarioEntity>) {
        const possivelUsuario = this.usuarios.find(
            usuaruiSalvo => usuaruiSalvo.id === id
        )
        if (!possivelUsuario) {
            throw new Error('Usuario n encontrado!')
        }

        Object.entries(dadosDeAtualizacao).forEach(([chave, valor]) => {
            if (chave === 'id') {
                return;
            }

            possivelUsuario[chave] = valor
        })

        return possivelUsuario;
    }

}