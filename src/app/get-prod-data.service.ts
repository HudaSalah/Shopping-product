import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // import for service
import { Observable, of } from 'rxjs'; //import observable

@Injectable({
  providedIn: 'root'
})
export class GetProdDataService {

  constructor(private http: HttpClient) { }

  getData(Path: string): Observable<any> {
    return this.http.get(Path);
  }
}
