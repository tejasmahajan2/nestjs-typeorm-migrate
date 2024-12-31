
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity()
export class User extends BaseEntity {
    @Column({ nullable: true })
    firstName: string;

    @Column({ nullable: true })
    lastName: string;

    @Column({ nullable: true })
    age: number;

    @Column({ default: true })
    isActive: boolean;

    @Column({ default: true })
    isAdmin: boolean;

    @Column({ default: true })
    address: boolean;
}
