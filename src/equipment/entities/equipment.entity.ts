
import { Column, DataType,Model,Table } from "sequelize-typescript";

interface equipmentAttrs {
    name:string;
    price:number;
    image:string;
    description:string;
}

@Table({tableName:'equipment'})
export class Equipment extends Model<Equipment,equipmentAttrs>{
    
    @Column({
        type:DataType.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true
    })
    id:number;

    @Column({
        type:DataType.STRING
    })
    name:string;

    @Column({
        type:DataType.DECIMAL
    })
    price:number;

    @Column({
        type:DataType.STRING
    })
    image:string;

    @Column({
        type:DataType.STRING
    })
    description:string;

    @Column({
        type:DataType.BOOLEAN
    })
    is_active:boolean;

}
