import ListProductUseCase from "./list.product.usecase";
import ProductFactory from "../../../domain/product/factory/product.factory";

const productA = ProductFactory.create("a", "productA", 123);
const productB = ProductFactory.create("b", "productA", 123);

const MockRepository = () => {
    return {
      find: jest.fn(),
      findAll: jest.fn().mockReturnValue(Promise.resolve([productA,productB])),
      create: jest.fn(),
      update: jest.fn(),
    };
  };

  describe("Unit test list product use case", () => {
    it("should list products", async () => {
        const productRepository = MockRepository();
        const usecase = new ListProductUseCase(productRepository);
        
          const output = await usecase.execute({});

          expect(output.products.length).toBe(2);
          expect(output.products[0].name).toBe(productA.name);
          expect(output.products[0].price).toBe(productA.price);
          expect(output.products[1].name).toBe(productB.name);
          expect(output.products[1].price).toBe(productB.price);
      
        });

});