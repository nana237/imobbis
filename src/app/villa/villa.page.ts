import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { ServicesService } from '../services.service';
import { Prestataire } from '../prestataire';
@Component({
  selector: 'app-villa',
  templateUrl: './villa.page.html',
  styleUrls: ['./villa.page.scss'],
})

export class VillaPage implements OnInit {

  constructor(private alertController:AlertController,
    private actionSheetController: ActionSheetController, 
    private take_: ServicesService,) { }

  public isSearchbarOpened : boolean = false;
    
    pre:Prestataire[];
    initial:any[];
    images: any[];

    idUser = localStorage.getItem('idUser');
   typeUser = localStorage.getItem('typeUser');

  ngOnInit() {


      this.take_.getAcceuil().subscribe((data: any[]) => {

      this.pre = data.filter((value)=>{ return (value.type_immobilier == "villa" && value.meubler == 0)});
      this.initial = this.pre;

      console.log("villa "+ this.pre)
      
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

  

   
 initializePrestataire(){
    this.pre = this.initial;
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


  
getItems(ev: any){

  this.initializePrestataire();

   let val = ev.target.value;

if (val && val.trim() != '') {
  
  this.pre = this.initial.filter(( pre  ) => {
  return ( pre.nom.toLowerCase().indexOf(val.toLowerCase() ) > -1 || 
  pre.prenom.toLowerCase().indexOf(val.toLowerCase()) > -1 || 
  
  
  pre.ville.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
  pre.quartier.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
  pre.type_immobilier.toLowerCase().indexOf(val.toLowerCase()) > -1
 

  );

})

}
}


  
  

}
