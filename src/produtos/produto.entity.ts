import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from 'typeorm';
import { ProdutoCaracteristicaEntity } from './produto-carateritica.entity';
import { ProdutoImagemEntity } from './produto-imagem.entity';

@Entity({ name: 'produtos' })
export class ProdutoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ name: 'usuario_id', length: 100, nullable: false })
  usuarioId: string;
  @Column({ name: 'nome', type: 'varchar', length: 100, nullable: false })
  nome: string;
  @Column({ name: 'valor', nullable: false })
  valor: number;
  @Column({ name: 'quantidade', nullable: false })
  quantidade: number;
  @Column({ name: 'descricao', length: 255, nullable: false })
  descricao: string;
  @Column({ name: 'categoria', length: 100, nullable: false })
  categoria: string;

  @OneToMany(() => ProdutoCaracteristicaEntity, 
  (produtoCaracteristicaEntity) => produtoCaracteristicaEntity.produto, {cascade: true, eager: true})
  caracteristicas: ProdutoCaracteristicaEntity[];
  
  @OneToMany(() => ProdutoImagemEntity,
  (produtoImagemEntity) => produtoImagemEntity.produto, {cascade: true, eager: true})
  imagens: ProdutoImagemEntity[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;
  @UpdateDateColumn({ name: 'update_at' })
  updatedAt: string;
  @DeleteDateColumn({ name: 'delete_at' })
  deletedAt: string;

  // caracteristicas: CaracteristicaProduto[];
  // imagens: ImagemProduto[];
}
