import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

class PaginationStore {
  currentPage = 1;

  limit = 8;

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: 'pagination',
      properties: ['currentPage', 'limit'],
      storage: window.localStorage,
    });
  }

  setCurrentPage = (page: number) => {
    this.currentPage = page;
  };
}

export default new PaginationStore();
