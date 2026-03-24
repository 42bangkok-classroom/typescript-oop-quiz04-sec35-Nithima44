import { Injectable, NotFoundException } from '@nestjs/common';
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

  findOne(id: string, feilds?: string[]): Partial<IUser> {
    const users = this.findAll();
    const user = users.find((u) => u.id === id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (feilds && feilds.length > 0) {
      const filteredUser: Partial<IUser> = {};
      feilds.forEach((field) => {
        const key = field as keyof IUser;
        if (user[key] !== undefined) {
          filteredUser[key] = user[key];
        }
      });
      return filteredUser;
    }

    return user;
  }
}
