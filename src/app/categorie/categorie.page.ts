import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { ServicesService } from '../services.service';
import { Prestataire } from '../prestataire';
@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.page.html',
  styleUrls: ['./categorie.page.scss'],
})
export class CategoriePage implements OnInit {
  public isSearchbarOpened : boolean = false;
  

  constructor( private http:HttpClient,
    private alertController:AlertController,
    private actionSheetController: ActionSheetController, 
    private take_ : ServicesService,) { }

    pre:Prestataire[];
    initial:any[];
  
 idUser = localStorage.getItem('idUser');
   typeUser = localStorage.getItem('typeUser');

    sentData : any;

    images: any[];

  ngOnInit() {

    this.take_.serviceData
    .subscribe(data=> (
    this.sentData = data
    ));

    this.take_.getAcceuil().subscribe((data: any[]) => {

      this.pre = data.filter((value)=>{ return value.idBienImmobilier == this.sentData.idBienImmobilier});
      this.initial = this.pre;
          
      console.log("fiklte "+ this.pre.length)
      
    },
    error => {
      alert("pp "+error);
    }
    );

    this.take_.getToff().subscribe((data: Prestataire[]) => {    
      this.images = data;
      console.log(this.images)
       
     },
     error => {
       alert("Mauvaise connexion!!!");
     }
     );


  }

  
  joindreToff ( image:any, id : any, imagess:any []){

    var tab = [];
    tab.push(image);
    for(var i = 0; i < imagess.length; i++){
        if(id == imagess[i].idBienImmobilier){
          tab.push(imagess[i].imageP)
         
        }
    }

    return tab;
   }



  envoyer(data : any){

    this.take_.changeData(data);
  }

  
  
  async presentActionSheet(data) {
    const actionSheet = await this.actionSheetController.create({
      header: "Joindre: " +  data.nom + " " + data.prenom,
      buttons: [{
        text: 'Appel: ' + data.tel,

        icon: 'call',
        handler: () => {
          // this.appel(a.num);
        }
      }, {
        text: 'SMS: ' + data.tel,
        icon: 'chatbubbles',
        handler: () => {
          //this.sendSMS(a.num,"Salut " + a.nom);
        }
      },

      ]
    });
    await actionSheet.present();
  }


  
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
     
      buttons: [
        {
          text: 'Modifier',         
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Supprimer',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }


  

}
