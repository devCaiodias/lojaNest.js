import { Injectable } from "@nestjs/common"
import { UsuarioEntity } from "./usuario.entity"

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

    private buscaPorId(id: string) {
        const possivelUsuario = this.usuarios.find(
            usuaruiSalvo => usuaruiSalvo.id === id
        )
        if (!possivelUsuario) {
            throw new Error('Usuario n encontrado!')
        }

        return possivelUsuario;
    }

    async atualiza(id: string, dadosDeAtualizacao: Partial<UsuarioEntity>) {
        
        const usuarioId = this.buscaPorId(id)

        Object.entries(dadosDeAtualizacao).forEach(([chave, valor]) => {
            if (chave === 'id') {
                return;
            }

            usuarioId[chave] = valor
        })

        return usuarioId;
    }


    async remove(id: string) {
        const usuario = this.buscaPorId(id)

        this.usuarios = this.usuarios.filter(
            usuarioSalvo => usuarioSalvo.id !== id
        )

        return usuario;
    }

}