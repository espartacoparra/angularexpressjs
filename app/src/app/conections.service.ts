import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({

  providedIn: 'root'
})
export class ConectionsService {
url='http://localhost:3000/usuarios';
  constructor(private http:HttpClient ) { }

  get():Observable<any>{
  return this.http.get<any>(this.url);
  }
  post(user):Observable<any>{
    return this.http.post<any>(this.url,user);
    }
  delete(id):Observable<any>{
    return this.http.delete<any>(this.url+'/'+id);
    }

    
}
