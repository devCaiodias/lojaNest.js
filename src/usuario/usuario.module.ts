import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsuarioController } from "./usuario.controller";
import { UsuarioRepositoy } from "./usuario.repositoy";
import { EmailEhUnicoValidatar } from "./validacao/email-eh-unico.validator";
import { UsuarioService } from "./usuario.service";
import { UsuarioEntity } from "./usuario.entity";

@Module({
    imports: [TypeOrmModule.forFeature(
        [UsuarioEntity]
    )],
    controllers: [UsuarioController],
    providers: [UsuarioRepositoy, EmailEhUnicoValidatar, UsuarioService]
})
export class UsuarioModule {
    
}