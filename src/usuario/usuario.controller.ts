import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioRepositoy } from "./usuario.repositoy";
import { CriaUsuarioDTO } from "./dto/CriaUsuario.dto";


@Controller('/usuarios')
export class UsuarioController {

    constructor(private usuarioRepositoy: UsuarioRepositoy) {

    }

    @Post()
    async criarUsuario(@Body() dadosUsuario: CriaUsuarioDTO) {
        this.usuarioRepositoy.salvar(dadosUsuario)
        return dadosUsuario;
    }

    @Get()
    async listaUsuarios() {
        return this.usuarioRepositoy.listar()
    }
}