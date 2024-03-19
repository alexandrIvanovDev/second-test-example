import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

class PaginationStore {
  page = 1;

  limit = 8;

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: 'pagination',
      properties: ['page', 'limit'],
      storage: window.localStorage,
    });
  }

  setPage = (page: number) => {
    this.page = page;
  };
}

export default new PaginationStore();
