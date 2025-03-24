import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'usuarios' })
export class UsuarioEntity {
  @PrimaryGeneratedColumn('uuid')  
  id: string;

  @Column({ name: 'nome', type: 'varchar', length: 100, nullable: false })
  nome: string;
  @Column({ name: 'email', type: 'varchar', length: 70, nullable: false })
  email: string;
  @Column({ name: 'senha', type: 'varchar', length: 255, nullable: false })
  senha: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;
  @UpdateDateColumn({ name: 'update_at' })
  updatedAt: string;
  @DeleteDateColumn({ name: 'delete_at' })
  deletedAt: string;
}
