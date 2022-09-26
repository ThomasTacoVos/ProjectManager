import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../user/models/user';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 1, firstname: 'Thomas', lastname: 'Vos', password: "1234e" },
      { id: 2, firstname: 'Ingrid', lastname: 'Hoogenboom',password: "1234e"},
      { id: 3, firstname: 'Sander', lastname: 'de Man',password: "1234e" },
      { id: 4, firstname: 'Matthijs', lastname: 'Bos',password: "1234e" },
      { id: 5, firstname: 'Gerben', lastname: 'Holland',password: "1234e"},
    ];
    return {users};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(users => users.id)) + 1 : 11;
  }
}