
import { DataType,Column,Model, ForeignKey, BelongsTo,Table } from "sequelize-typescript";
import { Equipment } from "../../equipment/entities/equipment.entity";
import { User } from "../../users/entities/user.entity";

interface orderAttrs {
    order_date:Date;
    amount:number;
    total_price:number;
}
@Table({tableName:'order'})
export class Order extends Model<Order,orderAttrs> {

    @Column({
        type:DataType.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true
    })
    id:number;

    @ForeignKey(() => Equipment)
    @Column({
        type:DataType.INTEGER
    })
    equipment_id:number;

    @ForeignKey(() => User)
    @Column({
        type:DataType.INTEGER
    })
    user_id:number;


    @Column({
        type:DataType.DATE
    })
    order_date:Date;

    @Column({
        type:DataType.INTEGER
    })
    amount:number;

    @Column({
        type:DataType.DECIMAL
    })
    total_price:number;


    @BelongsTo(() => Equipment)
    equipment: Equipment;


    @BelongsTo(() => User)
    user: User;

}
