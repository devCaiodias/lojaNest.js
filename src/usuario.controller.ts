import { Body, Controller, Post } from "@nestjs/common";
import { UsuarioRepositoy } from "./usuario.repositoy";


@Controller('/usuarios')
export class UsuarioController {

    private usuarioRepositoy = new UsuarioRepositoy()

    @Post()
    async criarUsuario(@Body() dadosUsuario) {
        this.usuarioRepositoy.salvar(dadosUsuario)
        return dadosUsuario;
    }
}