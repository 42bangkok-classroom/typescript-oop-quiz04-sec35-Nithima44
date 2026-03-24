import { Injectable } from '@nestjs/common';
import * as fs from 'fs/promises';
import { IUser } from './user.interface';
import * as path from 'path';

@Injectable()
export class UserService {
  test(): string[] {
    return [];
  }

  private readonly UserFilePath = path.join(
    process.cwd(),
    'data',
    'users.json',
  );

  async findAll(): Promise<IUser[]> {
    const data = await fs.readFile(this.UserFilePath, 'utf-8');
    return JSON.parse(data) as IUser[];
  }
}
