import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

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

    makePersistable(this, {
      name: 'user',
      properties: ['_user', '_isAuth'],
      storage: window.localStorage,
    });
  }

  setIsAuth = (value: boolean) => {
    this._isAuth = value;
  };

  setUser = (user: User) => {
    this._user = user;
  };

  logout = () => {
    this._user = null;
    this._isAuth = false;
  }

  get isAuth() {
    return this._isAuth;
  }

  get user() {
    return this._user;
  }
}

export default new UserStore();