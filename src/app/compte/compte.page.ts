import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ServicesService } from '../services.service';
import { HttpClient } from '@angular/common/http';
import { FormArray, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-compte',
  templateUrl: './compte.page.html',
  styleUrls: ['./compte.page.scss'],
})
export class ComptePage implements OnInit {
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

  constructor(private router:Router,
    private menu: MenuController,
    private http:HttpClient,
    private take_: ServicesService,
    ) {
      console.log(localStorage);
    }

  ngOnInit() {
    console.log(localStorage);
    this.menu.swipeGesture(false) 

  }


  logForm(){
   

    this.demande.dateNaiss = this.demande.dateNaiss.split('T')[0];
    this.demande.dateInscription = new Date().toJSON().split('T')[0];

   

    if(this.demande.password == this.demande.password2){
    const uploadData = new FormData();

    for (const key in this.demande) {
      if (Object.prototype.hasOwnProperty.call(this.demande, key)) {
        const val = this.demande[key];        
           
            uploadData.append(key, val + "");      
      }
    }
        
    
      this.take_.CreerCompte(this.demande).subscribe((data: any) => {
     

      //this.p = data[0].prestataire; 

     
      localStorage.clear();                   
      localStorage.removeItem("idUser");
    
      localStorage.setItem("idUser", data);
      localStorage.setItem("typeUser", this.demande.typeUtilisateur);
      localStorage.setItem("loginUser", this.demande.login);
      localStorage.setItem("emailUser", this.demande.email); 
      localStorage.setItem("telUser", this.demande.tel);  

     
      
     this.router.navigate(['folder/1']); 

    },
      error => {
        console.log( error);
        alert("Erreur, mauvais login ou password");
      });

    
  }
  else{
    alert("les password sont differents");
  }
  
}
  

}
