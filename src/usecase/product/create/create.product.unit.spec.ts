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

const inputC = {
    type : "c",
    name : "productC",
    price : 123,
};

const MockRepository = () => {
    return {
      find: jest.fn(),
      findAll: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
    };
  };

  describe("Unit teste create product use case", () => {
    it("should create a product type A", async () => {
        const productRepository = MockRepository();
        const productCreateUseCase = new CreateProductUseCase(productRepository);

        const output = await productCreateUseCase.execute(inputA);

        expect(output).toStrictEqual({
            id: expect.any(String),
            name: inputA.name,
            price: inputA.price
        });
    });
  
    it("should create a product type B", async () => {
        const productRepository = MockRepository();
        const productCreateUseCase = new CreateProductUseCase(productRepository);

        const output = await productCreateUseCase.execute(inputB);

        expect(output).toStrictEqual({
            id: expect.any(String),
            name: inputB.name,
            price: inputB.price*2
        });
    });

    it("should thrown an error invalid product type", async () => {
        const productRepository = MockRepository();
        const productCreateUseCase = new CreateProductUseCase(productRepository);

        await expect(productCreateUseCase.execute(inputC)).rejects.toThrow(
            "Product type not supported"
        );
    });    

});