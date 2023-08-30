import {Table, Column, Model, PrimaryKey, DataType} from "sequelize-typescript";

@Table({
  tableName: "products",
  timestamps: false
})
export default class ProductModel extends Model {
  @PrimaryKey
  @Column(DataType.TEXT)
  declare id: string;

  @Column({type: DataType.TEXT, allowNull: false })
  declare name: string;

  @Column({ type: DataType.NUMBER, allowNull: false })
  declare price: number;
}