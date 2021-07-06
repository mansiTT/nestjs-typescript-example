import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(createUserDto: UserDto) {   
    return this.usersRepository.save(createUserDto as User)
  }

  findAll() : Promise<User[]>{
   // return `This action returns all users`;
   return this.usersRepository.find();

  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
    }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return this.usersRepository.delete(id);
  }
}
