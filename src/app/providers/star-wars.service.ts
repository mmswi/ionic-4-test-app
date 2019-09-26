import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class StarWarsService {
  constructor(private http: HttpClient) {}

  getPeople() {
    return this.http.get("https://swapi.co/api/people");
  }

  getPerson(id) {
    return this.http.get(`https://swapi.co/api/people/${id}`);
  }
}
