import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) {
  }
  //Url ='https://jsonplaceholder.typicode.com/users';
  Url ='https://jsonplaceholder.typicode.com/todos';
  getPhotos(): Observable<any> {
        return this.http.get(this.Url);
  }
}
