import FindProductUseCase from "./find.product.usecase";
import ProductFactory from '../../../domain/product/factory/product.factory';

const product = ProductFactory.create("a","productA",123);

const MockRepository = () => {
    return {
      find: jest.fn().mockReturnValue(Promise.resolve(product)),
      findAll: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
    };
  };

  describe("Unit test find product use case", () => {
    it("should find a product", async () => {
        const repository = MockRepository();
        const usecase = new FindProductUseCase(repository);

        const input = {
            id: product.id,
          };
        
          const output = {
            id: product.id,
            name: "productA",
            price: 123
          }

          const result = await usecase.execute(input);

          expect(result).toEqual(output);
    });
  
    it("should not find a product", async () => {
        const repository = MockRepository();
        repository.find.mockImplementation(() => {
            throw new Error("Product not found");
        })

        const usecase = new FindProductUseCase(repository);

        const input = {
            id: product.id,
          };
        
          expect(() => {
            return usecase.execute(input);
          }).rejects.toThrow("Product not found");
    });

});