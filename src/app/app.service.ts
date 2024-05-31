import { Injectable } from "@nestjs/common";
import { User } from "../core/models/user";

@Injectable()
export class AppService {
  users = [];
  getHello(username: string): string {
    return `Hello World! ${username} `;
  }
  getUsers(): any {
    return this.users;
  }
  addUsers(user: User) {
    this.users.push(user);
  }
}
