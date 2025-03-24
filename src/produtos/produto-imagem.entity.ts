import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity({name: 'produto_imagens'})
export class ProdutoImagem {
    @PrimaryGeneratedColumn() // Gera automaticamente um ID único para cada registro
        id: number;
    @Column({name: 'url', length: 255, nullable: false})
    url: string;
    @Column({name: 'descricao', length: 255, nullable: false})
    descricao: string;
}
