import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ServicesService } from '../services.service';
import { HttpClient } from '@angular/common/http';
import { FormArray, FormGroup } from '@angular/forms';
import { Prestataire } from '../prestataire';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  constructor(
    
    private router:Router,
    private menu: MenuController,
    private http:HttpClient,
    private take_: ServicesService,
    
    ) {

   
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

connexion = {

  login: '',
  password: '',
};

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
   
    //this.menu.swipeGesture(false)


  }

  logForm(){
  
    this.demande.dateInscription = new Date().toJSON().split('T')[0];
    if(this.demande.password == this.demande.password2 && this.demande.login !=""
        && this.demande.password != ""){
 
          this.connexion.login = this.demande.login;
          this.connexion.password = this.demande.password;

    const uploadData = new FormData();
    const upload = new FormData();
    for (const key in this.demande) {
      if (Object.prototype.hasOwnProperty.call(this.demande, key)) {
            const val = this.demande[key];                
            uploadData.append(key, val + "");      
      }
    }


    for (const key in this.connexion) {
      if (Object.prototype.hasOwnProperty.call(this.connexion, key)) {
            const val = this.connexion[key];                
            upload.append(key, val + "");      
      }
    }
    
      this.take_.CreerCompte(uploadData).subscribe( (data : any)=> {
      //this.p = data[0].prestataire;  

      console.log('ici');
      this.take_.Seconnecter(upload).subscribe((data: any) => {    
    
        //console.log(data);
        //console.log('la');  
        localStorage.clear();                   
        localStorage.removeItem("idUser");
        localStorage.setItem("idUser", data[0].idUtilisateur);
        localStorage.setItem("typeUser", data[0].typeUtilisateur);
        localStorage.setItem("loginUser", data[0].login);
        localStorage.setItem("emailUser", data[0].email); 
        localStorage.setItem("telUser", data[0].tel);
        localStorage.setItem("paysUser", data[0].pays);       
       this.router.navigate(['folder/1']); 
  
      });
  
     //localStorage.clear();                   
     //localStorage.removeItem("idUser");  
     //localStorage.setItem("idUser", data);
     //localStorage.setItem("typeUser", this.demande.typeUtilisateur);
     //localStorage.setItem("loginUser", this.demande.login);
     //localStorage.setItem("emailUser", this.demande.email); 
     //localStorage.setItem("telUser", this.demande.tel);      
     //this.router.navigate(['folder/1']); 

    });


      this.take_.Seconnecter(upload).subscribe((data: any) => {     
      console.log(data);
      console.log('lala');
      localStorage.clear();                   
      localStorage.removeItem("idUser");
      localStorage.setItem("idUser", data[0].idUtilisateur);
      localStorage.setItem("typeUser", data[0].typeUtilisateur);
      localStorage.setItem("loginUser", data[0].login);
      localStorage.setItem("emailUser", data[0].email); 
      localStorage.setItem("telUser", data[0].tel); 
      localStorage.setItem("paysUser", data[0].pays);       
      this.router.navigate(['folder/1']); 

    });  
  }
  else{
    alert("les password sont differents");
  }
  
}
}
