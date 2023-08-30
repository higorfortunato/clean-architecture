import {Table, Model, PrimaryKey, Column, ForeignKey, BelongsTo, DataType} from "sequelize-typescript";
import ProductModel from "../../../product/repository/sequelize/product.model";
import OrderModel from "./order.model";

@Table({
  tableName: "order_items",
  timestamps: false,
})
export default class OrderItemModel extends Model {
  @PrimaryKey
  @Column(DataType.TEXT)
  declare id: string;

  @ForeignKey(() => ProductModel)
  @Column({ type: DataType.TEXT, allowNull: false })
  declare product_id: string;

  @BelongsTo(() => ProductModel)
  declare product: ProductModel;

  @ForeignKey(() => OrderModel)
  @Column({ type: DataType.TEXT, allowNull: false })
  declare order_id: string;

  @BelongsTo(() => OrderModel)
  declare order: ProductModel;

  @Column({ type: DataType.NUMBER, allowNull: false })
  declare quantity: number;

  @Column({ type: DataType.TEXT, allowNull: false })
  declare name: string;

  @Column({ type: DataType.NUMBER, allowNull: false })
  declare price: number;
}
