import { makeAutoObservable } from 'mobx';

export type User = {
  id: number;
  email: string;
  password: string;
};

class UserStore {
  _isAuth = false;

  _user: User | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setIsAuth = (value: boolean) => {
    this._isAuth = value;
  };

  setUser = (user: User) => {
    this._user = user;
  };

  get isAuth() {
    return this._isAuth;
  }

  get user() {
    return this._user;
  }
}

export default new UserStore();