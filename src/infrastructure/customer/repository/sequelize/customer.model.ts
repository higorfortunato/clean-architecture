import {Table, Model, PrimaryKey, Column, DataType} from "sequelize-typescript";

  @Table({
    tableName: "customers",
    timestamps: false,
  })
  export default class CustomerModel extends Model {
    @PrimaryKey
    @Column(DataType.TEXT)
    declare id: string;
  
    @Column({ type: DataType.TEXT, allowNull: false })
    declare name: string;
  
    @Column({ type: DataType.TEXT, allowNull: false })
    declare street: string;
  
    @Column({ type: DataType.NUMBER, allowNull: false })
    declare number: number;
  
    @Column({ type: DataType.TEXT, allowNull: false })
    declare zipcode: string;
  
    @Column({ type: DataType.TEXT, allowNull: false })
    declare city: string;
  
    @Column({ type: DataType.BOOLEAN, allowNull: false })
    declare active: boolean;
  
    @Column({ type: DataType.NUMBER, allowNull: false })
    declare rewardPoints: number;
  }