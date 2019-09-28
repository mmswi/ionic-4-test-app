import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Users } from "./helpers/users.interface";
import { UserModel } from "./helpers/users.model";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  private url = "https://jsonplaceholder.typicode.com/users";
  httpOptions = {
    headers: new HttpHeaders({ Accept: "application/json" })
  };
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  constructor(private http: HttpClient) {}

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.url, this.httpOptions).pipe(
      map(response => {
        // sending only the needed data to the component
        return response.map(user => new UserModel(user));
      }),
      catchError(this.handleError<Users[]>("getUsers", []))
    );
  }

  getUserById(id: number): Observable<Object> {
    return this.http.get(`${this.url}/${id}`).pipe(
      catchError(err => {
        // handling the error in the console
        this.handleError<any>(`getUser by id ${id}`, [])(err);
        // throwing the error also to the component to be handled on the details page
        return throwError(err);
      })
    );
  }
}
