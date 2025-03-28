import {Entity, Column, PrimaryGeneratedColumn, OneToOne} from 'typeorm'
import { ProdutoEntity } from './produto.entity';

@Entity({name: 'produto_caracteristicas'})
export class ProdutoCaracteristicaEntity {
    @PrimaryGeneratedColumn() // Gera automaticamente um ID único para cada registro
    id: number;
    @Column({name: 'name', length: 100, nullable: false})
    nome: string;
    @Column({name: 'descricao', length: 255, nullable: false})
    descricao: string;
    
    @OneToOne(() => ProdutoEntity, (produto) => produto.caracteristicas)
    produto: ProdutoEntity;
}