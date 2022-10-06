import { Body, Get, Delete, Post, Put, Param, Controller } from '@nestjs/common';
import { Pegawai } from './pegawai.entity';
import { PegawaiService } from './pegawai.service';
import { PegawaiDTO } from './pegawai.dto';

@Controller('pegawai')
export class PegawaiController {
    constructor (private PegawaiService:PegawaiService) {}

    @Post('add')
    membuatRecord(@Body() data : PegawaiDTO){ 
        return this.PegawaiService.create(data)

    }

    @Get()
    async showAll() {
        return {data: await this.PegawaiService.showAll()};
    }

    @Get('detail/:id')
    lihatDetail(@Param('id') id:string) {
        return this.PegawaiService.lihatPerRecord(id);
    }

    @Put('update/:id')
    updateDetail(@Param('id') id: string, @Body() data: Partial<Pegawai>) {
        return this.PegawaiService.update(id, data);
    }

    @Delete('delete/:id')
    menghapusRecord(@Param('id') id ) {
        return this.PegawaiService.hapusData(id); 
    }


}
