import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Pegawai } from './pegawai/pegawai.entity';
import { PegawaiModule } from './pegawai/pegawai.module';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    password: '123',
    database: 'pegawai',
    entities: [Pegawai],
    synchronize: true,
  }), PegawaiModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
