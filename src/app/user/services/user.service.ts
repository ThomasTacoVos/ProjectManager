import { Injectable } from '@angular/core';
import { UsersDB } from 'src/app/db/test-users';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // ?????????????????????????????
  private userUrl = 'api/';

  constructor(
    private http: HttpClient
  ) { }

  public getUsers(): Observable<User[]>{

    return this.http.get<User[]>(this.userUrl)
    .pipe(
      tap(_ => console.log('fetched users')),
      catchError(this.handleError<User[]>('Could not fetch the users', []))
    );
  }


getUser(id: number): Observable<User> {
  const url = `${this.userUrl}/${id}`;
  return this.http.get<User>(url).pipe(
    tap(_ => console.log(`fetched hero id=${id}`)),
    catchError(this.handleError<User>(`getUser id=${id}`))
  );
}

 private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error); 
    console.log(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
}

  addUser(newUser: User): void {
    UsersDB.push(newUser)
  }

}
