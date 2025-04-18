import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { ProdutoModule } from './produtos/produto.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './confg/postgres.config.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UsuarioModule, ProdutoModule, 
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    TypeOrmModule.forRootAsync({
    useClass: PostgresConfigService,
    inject: [PostgresConfigService]
  })]
})
export class AppModule {}
