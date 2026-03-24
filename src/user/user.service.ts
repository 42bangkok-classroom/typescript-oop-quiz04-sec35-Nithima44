import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { IUser } from './user.interface';
import * as path from 'path';

@Injectable()
export class UserService {
  test(): string[] {
    return [];
  }

  findAll(): IUser[] {
    const filePath = path.join(process.cwd(), 'data', 'users.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    const users: IUser[] = JSON.parse(data);
    return users;
  }
}
