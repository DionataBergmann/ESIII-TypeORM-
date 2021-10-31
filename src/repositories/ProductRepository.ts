import { EntityRepository, Repository } from 'typeorm';
import Product from '../models/Product';

@EntityRepository(Product)

export default class ProductRepository extends Repository<Product>{
  public async findByDescription(description:string):Promise<Product[]>{
    return this.find({
      where:{
        description,
      },
    })
  }
}
