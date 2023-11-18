import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bloqueo } from '../modelos/bloqueo';

@Injectable({
  providedIn: 'root'
})
export class BloqueoService {

  selectedBloqueo:Bloqueo;

  bloqueos!:Bloqueo[];
  
  readonly URL_API = 'http://localhost:3000/api/bloqueos'

  constructor(private http:HttpClient) { 
    this.selectedBloqueo=new Bloqueo();
  }
  
  getBloqueos(){
    return this.http.get(this.URL_API);
  }

  addBloqueo(bloqueo:Bloqueo){
    return this.http.post(this.URL_API, bloqueo);
  }
  putBloqueo(bloqueo:Bloqueo){
    return this.http.put(this.URL_API + `/${bloqueo._id}`, bloqueo);
  }
  deleteBloqueo(_id:string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
