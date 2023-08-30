import { Sequelize } from "sequelize-typescript";
import Product from "../../../domain/product/entity/product";
import ProductModel from "../../../infrastructure/product/repository/sequelize/product.model";
import ProductRepository from "../../../infrastructure/product/repository/sequelize/product.repository";
import UpdateProductUseCase from "./update.product.usecase";

const inputA = {
    id : "123",
    name : "UpdatedProductA",
    price : 124,
};

describe("Unit test update product use case", () => {
    let sequelize: Sequelize;
  
    beforeEach(async () => {
      sequelize = new Sequelize({
        dialect: "sqlite",
        storage: ":memory:",
        logging: false,
        sync: { force: true },
      });
      
      await sequelize.addModels([ProductModel]);
      await sequelize.sync();
    });
  
    afterEach(async () => {
      await sequelize.close();
    });
  
    it("should update product type A", async () => {
        const productRepository = new ProductRepository();
        const usecase = new UpdateProductUseCase(productRepository);
  
        const productA = new Product("123", "ProductA", 123);
  
        await productRepository.create(productA);

                
        const output = await usecase.execute(inputA);
  
        expect(output).toStrictEqual({
            id: expect.any(String),
            name: inputA.name,
            price: inputA.price
        });

    });
  
  });
