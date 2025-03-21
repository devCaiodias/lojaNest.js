import { IsEmail, IsNotEmpty, IsOptional, MinLength } from "class-validator"
import { EmailEhUnico } from "../validacao/email-eh-unico.validator"

export class AtualizaUsuario {

    @IsNotEmpty({
        message: 'Esse campo n pode ser vazio'
    })
    @IsOptional()
    nome: string 
    
    @IsEmail(undefined, {message: 'o email informado é ivalido '})
    @EmailEhUnico({message: 'Esse email ja existe'})
    @IsOptional()
    email: string
    
    @MinLength(6, {message: 'esse campo n pode ter mais de 6 caracteres'})
    @IsOptional()
    senha: string

}