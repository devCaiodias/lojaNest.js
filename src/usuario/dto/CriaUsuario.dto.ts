import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"

export class CriaUsuarioDTO {

    @IsNotEmpty({
        message: 'Esse campo n pode ser vazio'
    })
    nome: string 
    
    @IsEmail(undefined, {message: 'o email informado é ivalido '})
    email: string

    @MinLength(6, {message: 'esse campo n pode ter mais de 6 caracteres'})
    senha: string

}