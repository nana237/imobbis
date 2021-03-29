import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ServicesService } from '../services.service';
import { HttpClient } from '@angular/common/http';
import { FormArray, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  constructor(private router:Router,
    private menu: MenuController,
    private http:HttpClient,
    private take_: ServicesService,) {
    
     }

  demande = {
    nom:'',
    idUtilisateur:0,
    prenom:'',
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
    typeUtilisateur:'Client',
    moyenne:0,
    dateInscription:'',


};

  ngOnInit() {
   
    this.menu.swipeGesture(false)
  }

  logForm(){
    console.log(this.demande)

    this.demande.dateInscription = new Date().toJSON().split('T')[0];
    if(this.demande.password == this.demande.password2){
    const uploadData = new FormData();
    for (const key in this.demande) {
      if (Object.prototype.hasOwnProperty.call(this.demande, key)) {
        const val = this.demande[key];        
           
            uploadData.append(key, val + "");      
      }
    }
        
    
      this.take_.CreerCompte(uploadData).subscribe((data: any) => {
     

      //this.p = data[0].prestataire; 

   
     
      localStorage.clear();                   
      localStorage.removeItem("idUser");
     
      localStorage.setItem("idUser", data);
      localStorage.setItem("typeUser", this.demande.typeUtilisateur);
      localStorage.setItem("loginUser", this.demande.login);
     // localStorage.setItem("emailUser", this.demande.email); 
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
