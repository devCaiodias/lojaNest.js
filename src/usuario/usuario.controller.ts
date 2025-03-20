import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioRepositoy } from "./usuario.repositoy";
import { CriaUsuarioDTO } from "./dto/CriaUsuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import { v4 as uuid } from "uuid";

@Controller('/usuarios')
export class UsuarioController {

    constructor(private usuarioRepositoy: UsuarioRepositoy) {

    }

    @Post()
    async criarUsuario(@Body() dadosUsuario: CriaUsuarioDTO) {
        const usuarioEntity = new UsuarioEntity()
        usuarioEntity.email = dadosUsuario.email
        usuarioEntity.nome = dadosUsuario.nome
        usuarioEntity.senha = dadosUsuario.senha
        usuarioEntity.id = uuid()

        this.usuarioRepositoy.salvar(usuarioEntity)
        return { id: usuarioEntity.id, message: 'usuario criado com sucesso' }
    }

    @Get()
    async listaUsuarios() {
        return this.usuarioRepositoy.listar()
    }
}