import { Iuser } from './types/IUser.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  user: Iuser ;
  constructor() {
    this.user = {login: 'users', password: 'users'};
   }

  singInUser(user: Iuser): boolean {
    return (user.login === this.user.login && user.password === this.user.password);
  }
}

