import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Interface } from '../models/interface';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  //url json-server
  UrlApi='http://localhost:3000/produits';  


  constructor(private http: HttpClient) { }

//CRUD:
//Méthode Get

getAll(){
   return this.http.get<Interface>(this.UrlApi);
}


//Methode delete
delete(id){
    return this.http.delete(`${this.UrlApi}/${id}`);
}

//Methode Add
add(produits){
  return this.http.post<Interface>(this.UrlApi, produits);
}

//Methode update
update(produits){
  return this.http.put(`${this.UrlApi}/${produits.id}`, produits);
}


}
