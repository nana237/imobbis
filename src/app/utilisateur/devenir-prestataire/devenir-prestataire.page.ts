import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ServicesService } from '../../services.service';
import { Prestataire } from '../../prestataire';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-devenir-prestataire',
  templateUrl: './devenir-prestataire.page.html',
  styleUrls: ['./devenir-prestataire.page.scss'],
})
export class DevenirPrestatairePage implements OnInit {
  public isSearchbarOpened : boolean = false;

  infoConnect = {
    login: '',
    password: '',
    
  }

    dataToSend={
    nom:'',
    prenom:'',  
    date:'',
    prestataire:'',
    idUtilisateur:0,   
    dateNaiss:'',
    sexe:'',
    pays:'',
    langueParler:'',
    tel:'',
    email:'',
    login:'',
    nomAgenceImo:'',
    password:'',
    password2:'',
    photoProfil:'',
    typeUtilisateur:'',
    moyenne:0,
    dateInscription:'',
  }

  demande = {
    nom:'',
    prenom:'',  
    date:'',
    prestataire:'',
    idUtilisateur:0,   
    dateNaiss:'',
    sexe:'',
    pays:'',
    langueParler:'',
    tel:'',
    email:'',
    login:'',
    nomAgenceImo:'',
    password:'',
    password2:'',
    photoProfil:'',
    typeUtilisateur:'',
    moyenne:0,
    dateInscription:'',
  }
  formDevenirPrestataire = true
  formVerifPassword = false
  step = 1
  step1 = true
  step2 = false
  step3 = false
  step4 = false


connexion = {

  login: '',
  password: '',
};

  constructor(
    private router:Router,
    private menu: MenuController,
    private http:HttpClient,
    private take_: ServicesService,) { 

    }

  contry:any[];

  ngOnInit() {
    console.log(this.take_.getInfoUser())
    let infoUser=this.take_.getInfoUser()
    this.demande.typeUtilisateur = infoUser.typeUtilisateur
    this.demande.login = infoUser.login
    this.demande.email = infoUser.email
    this.demande.tel = infoUser.tel
    this.demande.pays = infoUser.pays

    this.infoConnect.login = infoUser.login
    
    this.take_.getAllcontries().subscribe((data: Prestataire[]) => {    
      this.contry = data;
      console.log(this.contry)
      },
      error => {
        alert("Mauvaise connexion!!!");
      }
      );
       this.menu.swipeGesture(false) 
  }


  toggleForms(){
    this.formDevenirPrestataire=!this.formDevenirPrestataire
    this.formVerifPassword=!this.formVerifPassword
  }

  verifierPassword(){
    console.log("verfication du mot de passe")
    const uploadData = new FormData();

    for (const key in this.infoConnect) {
      if (Object.prototype.hasOwnProperty.call(this.infoConnect, key)) {
        const val = this.infoConnect[key];        
          
            uploadData.append(key, val + "");      
      }
    }

    this.take_.Seconnecter(uploadData).subscribe((data: any) => {  
      console.log('data')
      console.log(data)
      console.log(data[0])
      console.log('end data')
      //this.dataToSend = data[0]
      this.dataToSend.idUtilisateur = data[0].idUtilisateur
      this.dataToSend.login = data[0].login
      this.dataToSend.password = data[0].motDepass
      this.dataToSend.password2 = data[0].motDepass
      this.dataToSend.pays = data[0].pays
      this.dataToSend.tel = data[0].tel
      this.dataToSend.typeUtilisateur = this.demande.typeUtilisateur
      this.dataToSend.nomAgenceImo = this.demande.nomAgenceImo
      this.dataToSend.nom = this.demande.nom
      this.dataToSend.prenom = this.demande.prenom
      this.dataToSend.email = this.demande.email
      this.dataToSend.sexe = this.demande.sexe
      this.dataToSend.dateNaiss = this.demande.dateNaiss

      console.log('this.dataToSend')
      console.log(this.dataToSend)
      console.log('end this.dataToSend')
      this.logForm(this.dataToSend)
    },
      error => {
        alert("mot de pass éroné")
      });
    // if passwordCorrect
   
  }

  verifierForm(){
    // verification
    let formValide = true
    if (formValide) {
      this.formDevenirPrestataire=false
      this.formVerifPassword=true
    } else {
      //message d'erreur
    }
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

  logForm(dataToSend){
    dataToSend.dateNaiss = dataToSend.dateNaiss.split('T')[0];
    dataToSend.dateInscription = new Date().toJSON().split('T')[0];

    if( true) {

    const uploadData = new FormData();
    for (const key in dataToSend) {
      if (Object.prototype.hasOwnProperty.call(dataToSend, key)) {

        const val = dataToSend[key];        
           
            uploadData.append(key, val + "");      
      }
    }
    console.log(dataToSend)
   // alert("modification reussi vous etes a présent prestataire")
    //return 0
      this.take_.ModifierCompte(uploadData).subscribe((data: any) => {   
      //this.p = data[0].prestataire; 

      //localStorage.clear();                   
     // localStorage.removeItem("idUser");    
     // localStorage.setItem("idUser", data);
     // localStorage.setItem("typeUser", dataToSend.typeUtilisateur);
      //localStorage.setItem("loginUser", dataToSend.login);
      //localStorage.setItem("emailUser", dataToSend.email); 
      //localStorage.setItem("telUser", dataToSend.tel);

     // this.router.navigate(['folder/1']); 

        
      this.take_.Seconnecter(uploadData).subscribe((data: any) => {    
    
        console.log(data);
        localStorage.clear(); 
        localStorage.removeItem("idUser");
        localStorage.setItem("idUser", data[0].idUtilisateur);
        localStorage.setItem("typeUser", data[0].typeUtilisateur);
        localStorage.setItem("loginUser", data[0].login);
        localStorage.setItem("emailUser", data[0].email); 
        localStorage.setItem("telUser", data[0].tel);    
        localStorage.setItem("paysUser", data[0].pays);    
        this.setInfoUser(data[0])     
        //this.router.navigate(['folder/1']); 
        window.location.assign('/');
  
      });

    });

    

    
  }
  else{
    alert("erreur quelque part");
  }
  
}

}
