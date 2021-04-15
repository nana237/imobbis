import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ServicesService } from '../../services.service';
import { Prestataire } from '../../prestataire';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inscription-prestataire',
  templateUrl: './inscription-prestataire.page.html',
  styleUrls: ['./inscription-prestataire.page.scss'],
})
export class InscriptionPrestatairePage implements OnInit {
  public isSearchbarOpened : boolean = false;
  

  demande = {
    nom:'',
    prenom:'',  
    date:'',
    prestataire:'',
    idUtilisateur:0,   
    dateNaiss:'',
    sexe:'',
    pays:'Cameroun',
    langueParler:'Francais',
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
   

};

connexion = {

  login: '',
  password: '',
};

  constructor(
    private router:Router,
    private menu: MenuController,
    private http:HttpClient,
    private take_: ServicesService,) { }

    contry:any[];

  ngOnInit() {
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

  logForm(){
   
    this.demande.dateNaiss = this.demande.dateNaiss.split('T')[0];
    this.demande.dateInscription = new Date().toJSON().split('T')[0];

    if( this.demande.password == this.demande.password2 && this.demande.login !=""
    && this.demande.password != "") {

    const uploadData = new FormData();
    for (const key in this.demande) {
      if (Object.prototype.hasOwnProperty.call(this.demande, key)) {

        const val = this.demande[key];        
           
            uploadData.append(key, val + "");      
      }
    }
        
      this.take_.CreerCompte(uploadData).subscribe((data: any) => {   
      //this.p = data[0].prestataire; 

      //localStorage.clear();                   
     // localStorage.removeItem("idUser");    
     // localStorage.setItem("idUser", data);
     // localStorage.setItem("typeUser", this.demande.typeUtilisateur);
      //localStorage.setItem("loginUser", this.demande.login);
      //localStorage.setItem("emailUser", this.demande.email); 
      //localStorage.setItem("telUser", this.demande.tel);

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
        this.router.navigate(['folder/1']); 
  
      });

    });

    
  }
  else{
    alert("les password sont differents");
  }
  
}

}
