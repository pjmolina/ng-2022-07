import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pizza } from '../domain/pizza';

const resource = '/pizzas';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  constructor(private http: HttpClient) {}

  getPizzas(): Observable<Pizza[]> {
    const url = environment.backendUrl + resource;
    return this.http.get<Pizza[]>(url);
  }
}
