import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { ServicesService } from '../services.service';
import { Prestataire } from '../prestataire';
import { CallNumber } from '@ionic-native/call-number/ngx';
@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.page.html',
  styleUrls: ['./terrain.page.scss'],
})
export class TerrainPage implements OnInit {

  constructor(private alertController: AlertController,
    private actionSheetController: ActionSheetController,
    private take_: ServicesService,
     private callNumber:CallNumber) { }

  public isSearchbarOpened : boolean = false;
  pre:Prestataire[];
  initial:any[];
  images: any[];
  users: any[];
  sms:any [];

   idUser = localStorage.getItem('idUser');
   typeUser = localStorage.getItem('typeUser');

   othercountry:any [];
   paysUser= localStorage.getItem('paysUser');


  ngOnInit() {
 
    this.take_.getAcceuil().subscribe((data: any[]) => {
    
      data = data.filter((value)=>{ return value.type_immobilier == "terrain"});
      
      this.pre = data.filter((value)=>{return( value.pays == this.paysUser)})
      this.othercountry = data.filter((value)=>{ return (value.pays != this.paysUser)})
  
      this.othercountry.map(pre_ =>{ this.pre.push(pre_)})
       
      this.initial = this.pre;
     
      
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
     this.take_.getAllUser().subscribe((data: any[]) => {
      this.users = data;
    
    },
      error => {
        alert("Mauvaise connexion!!!");
      }
    );
    //partout
    this.take_.getAllMessage().subscribe((data: any[]) => {
      this.sms = data.filter((value) => {
        return ((value.idExpediteur == this.idUser
          || value.idRecespteur == this.idUser)
          
          )
      });      
     

    },
      error => {
        alert("Mauvaise connexion!!!");
      }
    );

  }


  NbreReservation(data: any[], id) {
    var number = [];
    if (data != undefined) {
   data = data.filter((value) => {
        return ((value.idBienImmobilier == id
         )
          
          )
      });      

      for (let i = 0; i < data.length; i++) {
        if (data[i].idRecespteur == this.idUser && data[i].idExpediteur !== this.idUser) {
          number.push(data[i].idExpediteur);
        } else {
          if (data[i].idRecespteur !== this.idUser && data[i].idExpediteur == this.idUser) {
            number.push(data[i].idRecespteur);
          }
        }
      }
    } else {
      number = [];
    }
    return [...new Set(number)];

  }


  joindreToff ( image:any, id : any, imagess:any []){

    var tab = [];
    tab.push(image);
    for(var i = 0; i < imagess.length; i++){
        if(id == imagess[i].idBienImmobilier){
          tab.push(imagess[i].imageP)
         
        }
    }

    return [...new Set(tab)];
   }


  

  envoyer(data : any){
    this.take_.changeData(data);
  }
  
  initializePrestataire(){
    this.pre = this.initial;
}

   appel(number: any){ 
    this.callNumber.callNumber(number, true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
    
    }
  
  async presentActionSheet(data) {
    const actionSheet = await this.actionSheetController.create({
      header: "Joindre: " +  data.nom + " " + data.prenom,
      buttons: [{
        text: 'Appel: ' + data.tel,

        icon: 'call',
        handler: () => {
          this.appel(data.tel);
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
