import { Module } from '@nestjs/common';
import { Pegawai } from './pegawai.entity';
import {TypeOrmModule} from '@nestjs/typeorm';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { PegawaiController } from './pegawai.controller';
import { PegawaiService } from './pegawai.service';

@Module({
    imports: [TypeOrmModule.forFeature([Pegawai]), PegawaiModule],
    controllers: [AppController, PegawaiController],
    providers: [AppService, PegawaiService],
})
export class PegawaiModule {}
