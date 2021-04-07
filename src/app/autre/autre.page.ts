import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { ServicesService } from '../services.service';
import { Prestataire } from '../prestataire';
@Component({
  selector: 'app-autre',
  templateUrl: './autre.page.html',
  styleUrls: ['./autre.page.scss'],
})
export class AutrePage implements OnInit {
  public isSearchbarOpened : boolean = false;
  

  constructor(private alertController: AlertController,
    private actionSheetController: ActionSheetController,
    private take_: ServicesService,) { }

    pre:Prestataire[];
    initial:any[];

  ngOnInit() {

    
    this.take_.getAcceuil().subscribe((data: any[]) => {

      this.pre = data.filter((value)=>{ return value.type_immobilier == "autres"});
      this.initial = this.pre;

      console.log("autres "+ this.pre)
      
    },
    error => {
      alert("pp "+error);
    }
    );
  }

  envoyer(data : any){

    this.take_.changeData(data);
  }

  
  initializePrestataire(){
    this.pre = this.initial;
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
