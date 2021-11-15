import { validate } from 'class-validator';
import { Router } from 'express';
import { getRepository, getCustomRepository, getConnection } from 'typeorm';
import User from '../models/User';
import UserRepository from '../repositories/UserRepository';

const userRouter = Router();

userRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(User);
    const {code, name, email} = request.body;
    await getConnection().queryResultCache?.remove(['listUser'])

    const user = repo.create({
      code,
      name,
      email,
    });

    const errors = await validate(user);

    if(errors.length == 0){
      const res = await repo.save(user)
      return response.status(201).json(res);
    }
    return response.status(400).json(errors.map(v => v.constraints))

    return response.status(201).json(res);
  } catch (err) {
    console.log('err.message :>> ', err.message);
  }
});

userRouter.get('/', async (request, response) => {
  response.json(await getRepository(User).find({cache:{id:'listUser', milliseconds: 10000}}));
});

userRouter.get('/:name', async (request, response) => {
  const repository = getCustomRepository(UserRepository);
  const res = await repository.findByName(request.params.name);
  response.json(res);
});

export default userRouter;
