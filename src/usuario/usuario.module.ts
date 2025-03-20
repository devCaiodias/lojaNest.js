import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioRepositoy } from "./usuario.repositoy";

@Module({
    controllers: [UsuarioController],
    providers: [UsuarioRepositoy]
})
export class UsuarioModule {
    
}