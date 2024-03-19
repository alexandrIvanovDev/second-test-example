import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

class FilterStore {
  searchTerm = '';

  selectedOption = '';

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: 'filter',
      properties: ['searchTerm', 'selectedOption'],
      storage: window.localStorage,
    });
  }

  setSearchTerm = (value: string) => {
    this.searchTerm = value;
  };

  setSelectedOption = (value: string) => {
    this.selectedOption = value;
  };

  clearFilter = () => {
    this.searchTerm = '';
    this.selectedOption = '';
  };

}

export default new FilterStore();
