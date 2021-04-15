import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, LoadingController } from '@ionic/angular';
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

    private load:LoadingController,
    private router: Router,
    private menu: MenuController,
    private http: HttpClient,
    private take_: ServicesService,

    ) {
    this.envoie()

     
  }


  
  envoie(){

    this.load.create({
      message: "L'immobilier à portée de main..."
    }).then(loading=>{
      loading.present();
         setTimeout(() => {
           loading.dismiss();
         }, 3000);

    })

   }

  affiche: boolean = false;

  ngOnInit() {
      
    this.menu.swipeGesture(false);


     if(localStorage.getItem('idUser') !=null && localStorage.getItem('typeUser') != null){                         
              
            this.router.navigate(['folder/1']);

      }else{

            this.affiche = true;
      }     
    

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
          
            uploadData.append(key, val + "");      
      }
    }
         
      this.take_.Seconnecter(uploadData).subscribe((data: any) => {    
      localStorage.clear();                   
      localStorage.removeItem("idUser");
      this.take_.setInfoUser(data[0])  
      this.router.navigate(['folder/1']); 

    },
      error => {
        
        alert("Erreur, mauvais login ou password");
      });


  }


}


