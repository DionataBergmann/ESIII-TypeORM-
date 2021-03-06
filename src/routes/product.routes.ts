import { Router } from 'express';
import { getRepository, getCustomRepository, getConnection } from 'typeorm';
import Product from '../models/Product';
import ProductRepository from '../repositories/ProductRepository';

const productRouter = Router();

productRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(Product);
    const res = await repo.save(request.body);
    await getConnection().queryResultCache?.remove(['listProduct'])
    return response.status(201).json(res);
  } catch (err) {
    console.log('err.message :>> ', err.message);
  }
});

productRouter.get('/', async (request, response) => {
  response.json(await getRepository(Product).find({cache:{id:'listProduct', milliseconds: 10000}}));
});

productRouter.get('/:description', async (request, response) => {
  const repository = getCustomRepository(ProductRepository);
  const res = await repository.findByDescription(request.params.name);
  response.json(res);
});

export default productRouter;
