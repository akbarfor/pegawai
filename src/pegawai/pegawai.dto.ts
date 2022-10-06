//DTO = data transfer 
import {IsNotEmpty} from 'class-validator';

export class PegawaiDTO{
    @IsNotEmpty()
    fullname : string;

    @IsNotEmpty()
    email : string;

    @IsNotEmpty()
    phonenumber : number;

    status : string;


}