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

  getInfoUser(){
    let infoUser = {
      idUtilisateur:localStorage.getItem("idUser"),
      typeUtilisateur:localStorage.getItem("typeUser"),
      login:localStorage.getItem("loginUser"),
      email:localStorage.getItem("emailUser"),
      tel:localStorage.getItem("telUser"),
      pays:localStorage.getItem("paysUser")
    }
    return infoUser
  }

  setInfoUser(data){
                       
    localStorage.removeItem("idUser");
    localStorage.setItem("idUser", data.idUtilisateur);
    localStorage.setItem("typeUser", data.typeUtilisateur);
    localStorage.setItem("loginUser", data.login);
    localStorage.setItem("emailUser", data.email); 
    localStorage.setItem("telUser", data.tel);    
    localStorage.setItem("paysUser", data.pays);    
    return 0
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

ModifierCompte(data : any){

  return this.http.post("https://blow-corporation.com/imobbis/appImobbisJSON/compte/modifierCompte", data, {
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
