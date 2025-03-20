import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UsuarioRepositoy } from "../usuario.repositoy";
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailEhUnicoValidatar implements ValidatorConstraintInterface {
    
    constructor(private usuarioRepositoy: UsuarioRepositoy) {}

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean>{
        const usuarioComEmailExiste = await this.usuarioRepositoy.existeComEmail(value)
        return !usuarioComEmailExiste
    }

}

export const EmailEhUnico = (opcoesDeValidacao: ValidationOptions) => {
    return (objeto: Object, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesDeValidacao,
            constraints: [],
            validator: EmailEhUnicoValidatar
        })
    }
}