import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 11, name: 'Mr. Nice'},
      {id: 6094406403, name: 'Chris Callan'},
      {id: 6094681411, name: 'Ben Spille'},
      {id: 7327701167, name: 'Greg Barone'},
      {id: 9084158831, name: 'Josh Butler'},
      {id: 16, name: 'RubberMan'},
      {id: 17, name: 'Dynama'},
      {id: 18, name: 'Dr IQ'},
      {id: 19, name: 'Magma'},
      {id: 20, name: 'Tornado'}
    ];
    return {heroes};
  }
}
