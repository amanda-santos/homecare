import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto, ScheduleDto } from './dto/create-user.dto';
import { Schedule } from './entities/schedule.entitiy';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly schedulesRepository: Repository<Schedule>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();

    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.city = createUserDto.city;
    user.state = createUserDto.state;
    user.avatar = createUserDto.avatar;
    user.phone = createUserDto.phone;
    user.bio = createUserDto.bio;

    const createdUser = this.usersRepository.save(user).then((res) => res);

    const schedule = this.schedulesRepository.create({
      userId: createdUser.id,
      content: input.content,
    });

    const response = await this.repoService.messageRepo.save(message);

    return;
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
