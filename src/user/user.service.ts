import { Injectable } from '@nestjs/common';
import * as fs from 'fs/promises';
import { IUser } from './user.interface';
import * as path from 'path';

@Injectable()
export class UserService {
  test(): string[] {
    return [];
  }

  private readonly filePath = path.join(__dirname, '../../data/users.json');

  private async readData(): Promise<IUser[]> {
    const data = await fs.readFile(this.filePath, 'utf-8');
    return JSON.parse(data) as IUser[];
  }

  async findAll(): Promise<IUser[]> {
    return await this.readData();
  }
}
