import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/Users';


@EntityRepository(User)
export class UserRepository extends Repository<User> {

}