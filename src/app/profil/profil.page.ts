import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { ServicesService } from '../services.service';
import { Prestataire } from '../prestataire';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  constructor(
    private alertController:AlertController,
    private actionSheetController: ActionSheetController, 
    private take_ : ServicesService,
  ) { }

  pre:Prestataire[];
  initial:any[];
  idUser = localStorage.getItem('idUser');
  typeUser = localStorage.getItem('typeUser');
  loginUser = localStorage.getItem('loginUser');

  
  public isSearchbarOpened : boolean = false;
  
  sentData : any;
  nombre = 0;
  images: any[];
  envoyer(data : any){

    this.take_.changeData(data);
  }

  ngOnInit() {

    this.take_.serviceData
    .subscribe(data=> (
    this.sentData = data
    ));

    this.take_.getAcceuil().subscribe((data: any[]) => {

      this.pre = data.filter((value)=>{ return value.idUtilisateur == this.sentData.idUtilisateur});
      this.initial = this.pre;
      this.nombre = this.pre.length;
      
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
