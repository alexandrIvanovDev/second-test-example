import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

class FilterStore {
  searchTerm = '';
  categoriesOption = '';
  manufacturerOption = '';

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: 'filter',
      properties: ['searchTerm', 'categoriesOption', 'manufacturerOption'],
      storage: window.localStorage,
    });
  }

  setSearchTerm = (value: string) => {
    this.searchTerm = value;
  };

  onChangeCategory = (value: string) => {
    this.categoriesOption = value;
  };

  onChangeManufacturer = (value: string) => {
    this.manufacturerOption = value;
  };

  clearFilter = () => {
    this.searchTerm = '';
    this.categoriesOption = '';
    this.manufacturerOption = '';
  };
}

export default new FilterStore();
