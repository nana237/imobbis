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
  public infoUser;
  public locataire= {
    idLocataire:'',
    nom:'',
    prenom:'',
    situationMatrimonial:'',
    profession:'',
    numCNI:'',
    tel:'',
    nationalite:'',
    ville:'',
    quartier:'',
    nbEnfant:'',
    idBailleur:'',
    idUtilisateurInitial:'',
    dataAjout:''
  };
  public modifLocataire = false;
  public locataireSelectioner

  setLocataire(locataire_){
    this.locataire = locataire_
    this.modifLocataire = true
  }

  resetLocataire(){
    this.locataire = {
      idLocataire:'',
      nom:'',
      prenom:'',
      situationMatrimonial:'',
      profession:'',
      numCNI:'',
      tel:'',
      nationalite:'',
      ville:'',
      quartier:'',
      nbEnfant:'',
      idBailleur:'',
      idUtilisateurInitial:'',
      dataAjout:''
    }
    this.modifLocataire = false
  }

  
  changeData(data: any) {

    this.dataSource.next(data);
 
  }

  getInfoUser(){
    this.infoUser = {
      idUtilisateur:localStorage.getItem("idUser"),
      typeUtilisateur:localStorage.getItem("typeUser"),
      login:localStorage.getItem("loginUser"),
      email:localStorage.getItem("emailUser"),
      tel:localStorage.getItem("telUser"),
      pays:localStorage.getItem("paysUser")
    }
    return this.infoUser
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

  baseUrl = "https://blow-corporation.com/imobbis/"
  baseUrlImg = "https://blow-corporation.com/imobbis/appImobbisJSON/"

  getAcceuil(){

  return this.http.get<Prestataire[]>(this.baseUrl + "appImobbisJSON/poste/getAllPoste_utilisateur");

}

getAllPoste_Prestataire(data){
  console.log('data')
  console.log(data)
  return this.http.post("https://blow-corporation.com/imobbis/appImobbisJSON/poste/getAllPoste_Prestataire", data);
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

getAllLocataireBailleur(data){
  return this.http.post("https://blow-corporation.com/imobbis/appImobbisJSON/locataire/getAllLocataireBailleur", data);
}

getAllLocataire(data){
  return this.http.get<Prestataire[]>(this.baseUrl + "appImobbisJSON/locataire/getAllLocataire", data);
}

creerLocataire(data){
  return this.http.post(this.baseUrl + "appImobbisJSON/locataire/creerLocataire", data);
}

getAllContrat(data){
  return this.http.get<Prestataire[]>(this.baseUrl + "appImobbisJSON/contrat/getAllContrat");
}

getAllContrateBailleur(data){
  return this.http.get<Prestataire[]>(this.baseUrl + "appImobbisJSON/contrat/getAllContrateBailleur", data);
}

getAllContrateLocataire(data){
  return this.http.post(this.baseUrl + "appImobbisJSON/contrat/getAllContrateLocataire", data);
}

creerContrat(data){
  return this.http.post(this.baseUrl + "appImobbisJSON/contrat/creerContrat", data);
}

modifierContrat(data : any){

  return this.http.post(this.baseUrl + "appImobbisJSON/compte/modifierContrat", data, {
    reportProgress:true,
    observe:'events'
  });

}
}
