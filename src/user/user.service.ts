import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { IUser } from './user.interface';
import * as path from 'path';

@Injectable()
export class UserService {
  test(): string[] {
    return [];
  }

  private readonly filePath = path.join(process.cwd(), 'data', 'users.json');

  async findAll(): Promise<IUser[]> {
    const data = await fs.promises.readFile(this.filePath, 'utf-8');
    const users: IUser[] = JSON.parse(data);
    return users;
  }
}
