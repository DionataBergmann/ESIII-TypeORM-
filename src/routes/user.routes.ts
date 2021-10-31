import { Router } from 'express';
import { getRepository, getCustomRepository } from 'typeorm';
import User from '../models/User';
import UserRepository from '../repositories/UserRepository';

const userRouter = Router();

userRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(User);
    const res = await repo.save(request.body);
    return response.status(201).json(res);
  } catch (err) {
    console.log('err.message :>> ', err.message);
  }
});

userRouter.get('/', async (request, response) => {
  response.json(await getRepository(User).find());
});

userRouter.get('/:name', async (request, response) => {
  const repository = getCustomRepository(UserRepository);
  const res = await repository.findByName(request.params.name);
  response.json(res);
});

export default userRouter;
