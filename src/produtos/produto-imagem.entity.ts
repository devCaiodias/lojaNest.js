import {Entity, Column, PrimaryGeneratedColumn, OneToOne} from 'typeorm'
import { ProdutoEntity } from './produto.entity';

@Entity({name: 'produto_imagens'})
export class ProdutoImagemEntity {
    @PrimaryGeneratedColumn() // Gera automaticamente um ID único para cada registro
        id: number;
    @Column({name: 'url', length: 255, nullable: false})
    url: string;
    @Column({name: 'descricao', length: 255, nullable: false})
    descricao: string;

    @OneToOne(() => ProdutoEntity,
    (produto) => produto.imagens, {orphanedRowAction: 'delete',onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    produto: ProdutoEntity
}
