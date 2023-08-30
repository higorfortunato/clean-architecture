import {Table, Model, PrimaryKey, Column, ForeignKey, BelongsTo, HasMany, DataType} from "sequelize-typescript";
import CustomerModel from "../../../customer/repository/sequelize/customer.model";
import OrderItemModel from "./order-item.model";

@Table({
  tableName: "orders",
  timestamps: false,
})
export default class OrderModel extends Model {
  @PrimaryKey
  @Column(DataType.TEXT)
  declare id: string;

  @ForeignKey(() => CustomerModel)
  @Column({ type: DataType.TEXT, allowNull: false })
  declare customer_id: string;

  @BelongsTo(() => CustomerModel)
  declare customer: CustomerModel;

  @HasMany(() => OrderItemModel)
  declare items: OrderItemModel[];

  @Column({ type: DataType.NUMBER, allowNull: false })
  declare total: number;
}
