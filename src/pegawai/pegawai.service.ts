import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PegawaiDTO } from './pegawai.dto';
import { Pegawai } from './pegawai.entity';

@Injectable()
export class PegawaiService {
    constructor(
        @InjectRepository(Pegawai)
        private pegawaiRepository: Repository<Pegawai>
    ) {}

    async showAll(){
        return await this.pegawaiRepository.find();
    }

    async create(data : PegawaiDTO) {
        const pegawaiNew = await this.pegawaiRepository.create(data);
        await this.pegawaiRepository.save(pegawaiNew);
        return pegawaiNew
    }

    async lihatSemua(){
        return "ini di service";
    }

    async lihatPerRecord(id ){
        return await this.pegawaiRepository.findOne({where : { id } });
    }

    async update(id: string, data: Partial<PegawaiDTO>){
        await this.pegawaiRepository.update({ id}, data);
        return await this.pegawaiRepository.findOne({ where: {id} })
        

    }

    async hapusData({ id }: { id; }){
        await this.pegawaiRepository.delete({id})
        return {deleted:true}
    }
}
