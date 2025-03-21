import { IsEmail, IsNotEmpty, MinLength } from "class-validator"
import { EmailEhUnico } from "../validacao/email-eh-unico.validator"

export class CriaUsuarioDTO {

    @IsNotEmpty({
        message: 'Esse campo n pode ser vazio'
    })
    nome: string 
    
    @IsEmail(undefined, {message: 'o email informado é ivalido '})
    @EmailEhUnico({message: 'Esse email ja existe'})
    email: string

    @MinLength(6, {message: 'esse campo n pode ter mais de 6 caracteres'})
    senha: string

}