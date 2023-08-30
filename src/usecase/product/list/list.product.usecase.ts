import ProductRepositoryInterface from "../../../domain/product/repository/product-repository.interface";
import {InputListProductDto, OutputListProductDto } from "./list.product.dto";
import Product from '../../../domain/product/entity/product.interface';

export default class FindProductUseCase {
    private productRepository: ProductRepositoryInterface;

    constructor(productRepository : ProductRepositoryInterface) {
        this.productRepository = productRepository;
    }

    async execute(
        input: InputListProductDto
    ): Promise<OutputListProductDto> {
        const products = await this.productRepository.findAll();

        return OutputMapper.toOutput(products);
    }
}
class OutputMapper {
    static toOutput(product: Product[]): OutputListProductDto {
        return {
            products: product.map((product) => ({
                id: product.id,
                name: product.name,
                price: product.price,
            })),
        };
    }
}

