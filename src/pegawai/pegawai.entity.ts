import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pegawai {

    @PrimaryGeneratedColumn()
    id : string;

    @Column()
    fullname : string;

    @Column()
    email : string;

    @Column()
    phonenumber: number;

    @Column()
    status: string;

}