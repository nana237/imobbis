import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, LoadingController, Platform } from '@ionic/angular';
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
  subscribe: any;
  constructor(

    private load:LoadingController,
    private router: Router,
    private menu: MenuController,
    private http: HttpClient,
    private take_: ServicesService,
    public platform:Platform
    ) {
      this.subscribe = this.platform.backButton.subscribeWithPriority(999999,()=>{
        if (this.constructor.name == "FolderPage") {
          if (window.confirm("êtes vous sur de vouloir quitter IMOBBIS ?")) {
            navigator["app"].exitApp();
          }
        }
      })

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
      
    //this.menu.swipeGesture(false);

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
      localStorage.setItem("idUser", data[0].idUtilisateur);
      localStorage.setItem("typeUser", data[0].typeUtilisateur);
      localStorage.setItem("loginUser", data[0].login);
      localStorage.setItem("emailUser", data[0].email); 
      localStorage.setItem("telUser", data[0].tel);
      localStorage.setItem("paysUser", data[0].pays);        
      this.router.navigate(['folder/1']); 

    },
      error => {
        
        alert("Erreur, mauvais login ou password");
      });


  }


}


