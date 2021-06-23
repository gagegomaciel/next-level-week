import { getCustomRepository } from 'typeorm';
import { UserRepository } from "../repositories/UserRepository";

interface IUserRequest {
  name: string;
  email: string;
  admin: boolean;
}

export class CreateUserService {

  async execute({ name, email, admin } : IUserRequest) {
    const usersRepository = getCustomRepository(UserRepository);

    if (!email) {
      throw new Error("E-mail obrigatório!");
    }

    const userAlreadyExist = await usersRepository.findOne({email});

    if (userAlreadyExist) {
      throw new Error("Usuário já existe!");
    }

    const user = usersRepository.create({
      name,
      email,
      admin
    });

    await usersRepository.save(user);

    return user;
  }
}