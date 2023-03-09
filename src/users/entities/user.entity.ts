import { Model,Column, DataType,Table } from "sequelize-typescript";


interface userAttrs {
    name:string;
    email:string;
    password:string;
    phone_number:string;
    location:string;
}
@Table({tableName:'user'})
export class User extends Model<User,userAttrs>{

    @Column({
        type:DataType.INTEGER,
        autoIncrement:true,
        unique:true,
        primaryKey:true
    })
    id:number;

    @Column({
        type:DataType.STRING
    })
    name:string;

    @Column({
        type:DataType.STRING
    })
    email:string;

    @Column({
        type:DataType.STRING
    })
    password:string;

    @Column({
        type:DataType.STRING
    })
    phone_number:string;

    @Column({
        type:DataType.STRING
    })
    location:string;

    @Column({
        type:DataType.BOOLEAN,
        defaultValue:false
    })
    is_admin:boolean;


    @Column({
        type:DataType.BOOLEAN,
        defaultValue:false
    })
    is_active:boolean;
}
