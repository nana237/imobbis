import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Prestataire} from './prestataire';
import { map } from "rxjs/operators";
import { BehaviorSubject } from "rxjs";  
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }
  
  private dataSource = new BehaviorSubject("hotboy");
  serviceData = this.dataSource.asObservable();

  
  changeData(data: any) {

    this.dataSource.next(data);
 
  }
 //https://blow-corporation.com/imobbis/appImobbisJSON/compte/creerCompte

  //https://blow-corporation.com/imobbis/appImobbisJSON/poste/poster
  getAcceuil(){

  return this.http.get<Prestataire[]>("https://blow-corporation.com/imobbis/appImobbisJSON/poste/getAllPoste_utilisateur");

}

postPost(data){

  return this.http.post("https://blow-corporation.com/imobbis/appImobbisJSON/poste/poster", data);

}

getToff(){
  return this.http.get<Prestataire[]>("https://blow-corporation.com/imobbis/appImobbisJSON/poste/getAllPhotoss");
}


Seconnecter(data : any){
  return this.http.post("https://blow-corporation.com/imobbis/appImobbisJSON/compte/seConnecter", data);
}


CreerCompte(data : any){

  return this.http.post("https://blow-corporation.com/imobbis/appImobbisJSON/compte/creerCompte", data, {
    reportProgress:true,
    observe:'events'
  });

}

getAllMessage(){
  return this.http.get<Prestataire[]>("https://blow-corporation.com/imobbis/appImobbisJSON/message/getAllMessage");
}

getAllUser(){

  return this.http.get<Prestataire[]>("https://blow-corporation.com/imobbis/appImobbisJSON/compte/getAllCompteNameSurname");

}

sendSms(data :any){
  return this.http.post("https://blow-corporation.com/imobbis/appImobbisJSON/message/creerMessage", data);
}

//https://blow-corporation.com/imobbis/appImobbisJSON/commentaire/getAllCommentaire


getAllCommentaire(){
  return this.http.get<Prestataire[]>("https://blow-corporation.com/imobbis/appImobbisJSON/commentaire/getAllCommentaire");
}



sendCommentaire(data :any){
  return this.http.post("https://blow-corporation.com/imobbis/appImobbisJSON/commentaire/creerCommentaire", data);
}

getAllcontries(){
  return this.http.get<Prestataire[]>("https://restcountries.eu/rest/v2/all");
}

}
