import { EntityRepository, Repository } from 'typeorm';
import UserData from '../models/UserData';

@EntityRepository(UserData)
export default class UserRepository extends Repository<UserData> {
  public async findByName(name: string): Promise<UserData[]> {
    return this.find({
      where: {
        name,
      },
    });
  }
}
