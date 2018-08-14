import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(
    private http: Http
  ) { }

  getIngredients(){
    return this.http.get(`${environment.BASE_URL}/api/ingredients`)
      .pipe(map(res => res.json()))
  }
}