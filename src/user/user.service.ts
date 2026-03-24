import { Injectable } from '@nestjs/common';
import * as fs from 'fs/promises';
import { IUser } from './user.interface';
import * as path from 'path';

@Injectable()
export class UserService {
  test(): string[] {
    return [];
  }

  async findAll(): Promise<IUser[]> {
    const filePath = path.join(process.cwd(), 'data', 'users.json');
    const data = await fs.readFile(filePath, 'utf-8');
    const users: IUser[] = JSON.parse(data);
    return users;
  }
}
