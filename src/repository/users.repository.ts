import { usersListMock } from '../database';
import { UsersInterface } from '../interfaces';

export class UsersRepository {
  private users: UsersInterface[];
  private foundUser: UsersInterface[];

  constructor() {
    this.users = usersListMock;
  }

  public findOne(email: string, password: string): boolean {
    this.foundUser = this.users.filter(
      (obj) => obj.password === password && obj.email === email
    );

    if (this.foundUser.length > 0) {
      return true;
    }
  }
}
