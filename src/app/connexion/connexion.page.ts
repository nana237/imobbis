import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ServicesService } from '../services.service';
import { HttpClient } from '@angular/common/http';
import { FormArray, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
  public valide: boolean = true;
  constructor(

    private router: Router,
    private menu: MenuController,
    private http: HttpClient,
    private take_: ServicesService,


    ) {
      localStorage.clear();    

  }

  ngOnInit() {
    localStorage.clear();    
    this.menu.swipeGesture(false);

    console.log(localStorage);
  }

  demande = {
    login: '',
    password: '',
    
  };

  value: any[]

  logForm() {
    //console.log(this.demande)
    const uploadData = new FormData();

    for (const key in this.demande) {
      if (Object.prototype.hasOwnProperty.call(this.demande, key)) {
        const val = this.demande[key];        
            console.log(key + " - " + val);
            uploadData.append(key, val + "");      
      }
    }
        
      console.log(this.demande);
      this.take_.Seconnecter(uploadData).subscribe((data: any) => {
     

      //this.p = data[0].prestataire; 

      console.log(data);
      localStorage.clear();                   
      localStorage.removeItem("idUser");
      console.log(localStorage);
      localStorage.setItem("idUser", data[0].idUtilisateur);
      localStorage.setItem("typeUser", data[0].typeUtilisateur);
      localStorage.setItem("loginUser", data[0].login);
      localStorage.setItem("emailUser", data[0].email); 
      localStorage.setItem("telUser", data[0].tel);      

      console.log(localStorage);
    
     
      
     this.router.navigate(['folder/1']); 

    },
      error => {
        

        
        console.log("erreur"+error);
        alert("Erreur, mauvais login ou password");
      });


  }


}


