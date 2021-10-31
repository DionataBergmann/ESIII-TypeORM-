import { Router } from 'express';
import { getRepository, getCustomRepository } from 'typeorm';
import UserData from '../models/UserData';
import UserDataRepository from '../repositories/UserDataRepository';

const UserDataRouter = Router();

UserDataRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(UserData);
    const res = await repo.save(request.body);
    return response.status(201).json(res);
  } catch (err) {
    console.log('err.message :>> ', err.message);
  }
});

UserDataRouter.get('/', async (request, response) => {
  response.json(await getRepository(UserData).find());
});

UserDataRouter.get('/:name', async (request, response) => {
  const repository = getCustomRepository(UserDataRepository);
  const res = await repository.findByName(request.params.name);
  response.json(res);
});

export default UserDataRouter;
