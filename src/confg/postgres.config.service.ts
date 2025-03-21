import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class PostgresConfigService implements TypeOrmOptionsFactory {
    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: "127.0.0.1",
            port: 543,
            username: "caio",
            password: "1235",
            database: "loja",
            entities: [],
            synchronize: true
        }
    }
    
}