import { Sequelize } from "sequelize-typescript";
import Product from "../../../domain/product/entity/product";
import ProductModel from "../../../infrastructure/product/repository/sequelize/product.model";
import ProductRepository from "../../../infrastructure/product/repository/sequelize/product.repository";
import CreateProductUseCase from "./create.product.usecase";


const inputA = {
    type : "a",
    name : "productA",
    price : 123,
};

const inputB = {
    type : "b",
    name : "productB",
    price : 123,
};

describe("Unit test create product use case", () => {
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
  
    it("should create product type A", async () => {
        const productRepository = new ProductRepository();
        const usecase = new CreateProductUseCase(productRepository);
  
        const productA = new Product("123", "ProductA", 123);
  
        await productRepository.create(productA);
                
        const output = await usecase.execute(inputA);
  
        expect(output).toStrictEqual({
            id: expect.any(String),
            name: inputA.name,
            price: inputA.price
        });

    });

    it("should create product type B", async () => {
        const productRepository = new ProductRepository();
        const usecase = new CreateProductUseCase(productRepository);
  
        const productB = new Product("123", "ProductB", 123);
  
        await productRepository.create(productB);
                
        const output = await usecase.execute(inputB);
  
        expect(output).toStrictEqual({
            id: expect.any(String),
            name: inputB.name,
            price: inputB.price*2
        });

    });     
  
  });
