import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity({name: 'produto_caracteristica'})
export class ProdutoCaracteristica {
    @PrimaryGeneratedColumn() // Gera automaticamente um ID único para cada registro
    id: number;
    @Column({name: 'name', length: 100, nullable: false})
    nome: string;
    @Column({name: 'descricao', length: 255, nullable: false})
    descricao: string;
}