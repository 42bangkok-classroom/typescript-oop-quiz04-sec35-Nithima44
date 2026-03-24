import { Injectable } from '@nestjs/common';
import * as fs from 'fs/promises';
import { IUser } from './user.interface';

@Injectable()
export class UserService {
  test(): string[] {
    return [];
  }

  findAll(): Promise<IUser[]> {
    return fs
      .readFile('users.json', 'utf-8')
      .then((data) => JSON.parse(data) as IUser[]);
  }
}
