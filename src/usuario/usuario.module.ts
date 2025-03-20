import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioRepositoy } from "./usuario.repositoy";
import { EmailEhUnicoValidatar } from "./validacao/email-eh-unico.validator";

@Module({
    controllers: [UsuarioController],
    providers: [UsuarioRepositoy, EmailEhUnicoValidatar]
})
export class UsuarioModule {
    
}