import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioRepositoy } from "./usuario.repositoy";


@Controller('/usuarios')
export class UsuarioController {

    constructor(private usuarioRepositoy: UsuarioRepositoy) {

    }

    @Post()
    async criarUsuario(@Body() dadosUsuario) {
        this.usuarioRepositoy.salvar(dadosUsuario)
        return dadosUsuario;
    }

    @Get()
    async listaUsuarios() {
        return this.usuarioRepositoy.listar()
    }
}