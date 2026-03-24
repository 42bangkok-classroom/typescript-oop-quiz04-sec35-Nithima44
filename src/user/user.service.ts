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
    const filePath = path.join(__dirname, '..', '..', 'data', 'users.json');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const users = JSON.parse(fileContent) as IUser[];

    return users;
  }
}
