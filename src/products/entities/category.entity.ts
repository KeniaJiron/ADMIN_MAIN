import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity()
export class Category{
    @PrimaryColumn()
    id:number

    @Column()
    categoria:string

    @Column()
    created_at:string
    @Column()
    user_id:number
    
@ManyToOne(() => User)
@JoinColumn({
    name: 'user_id',
})
autor: User
}