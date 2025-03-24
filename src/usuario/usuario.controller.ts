import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UsuarioRepositoy } from "./usuario.repositoy";
import { CriaUsuarioDTO } from "./dto/CriaUsuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import { v4 as uuid } from "uuid";
import { ListaUsuarioDTO } from "./dto/ListaUsuario.dto";
import { AtualizaUsuario } from "./dto/AtualizaUsuarios.dto";
import { UsuarioService } from "./usuario.service";

@Controller('/usuarios')
export class UsuarioController {

    constructor(
        private usuarioRepositoy: UsuarioRepositoy,
        private usuarioService: UsuarioService
    ) {

    }

    @Post()
    async criarUsuario(@Body() dadosUsuario: CriaUsuarioDTO) {
        const usuarioEntity = new UsuarioEntity()
        usuarioEntity.email = dadosUsuario.email
        usuarioEntity.nome = dadosUsuario.nome
        usuarioEntity.senha = dadosUsuario.senha
        usuarioEntity.id = uuid()

        this.usuarioRepositoy.salvar(usuarioEntity)
        
        return { usuario: new ListaUsuarioDTO(usuarioEntity.id, usuarioEntity.nome), message: 'usuario criado com sucesso' }
    }

    @Get()
    async listaUsuarios() {
        const usuariosSalvos = await this.usuarioService.listaUsuarios()

 
        return usuariosSalvos;
    }

    @Put('/:id')
    async atualizarUsuario(@Param('id') id: string, @Body() dadosAtualizados: AtualizaUsuario) {
        const usuarioatualizado = await this.usuarioRepositoy.atualiza(id, dadosAtualizados)

        return {
            usuario: usuarioatualizado,
            message: 'Usuario atualizado'
        }
    }

    @Delete('/:id')
    async deletarUsuario(@Param('id') id: string) {
        const usuarioRemovido = await this.usuarioRepositoy.remove(id)

        return {
            usuario: usuarioRemovido,
            message: 'Usuario removido'
        }
    }
}