import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
//import { SMS } from '@ionic-native/sms/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { ServicesService } from '../services.service';
import { Prestataire } from '../prestataire';
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.page.html',
  styleUrls: ['./acceuil.page.scss'],
})
export class AcceuilPage implements OnInit {

  public isSearchbarOpened: boolean = false;

  slideOpts = {
    initialSlide: 1,
    speed: 50
  };

  slideOpt = {
    initialSlide: 1,
    speed: 50
  };

  idUser = localStorage.getItem('idUser');
  typeUser = localStorage.getItem('typeUser');


  constructor(public actionSheetController: ActionSheetController,
    //private sms: SMS,
    private callNumber:CallNumber,
  private take_: ServicesService,) { }
  pre: Prestataire[];
  initial: any[];
  sentData: any;
  users: any[];

  ngOnInit() {

    this.take_.serviceData
      .subscribe(data => (
        this.sentData = data
      ));
      

    this.take_.getAllMessage().subscribe((data: any[]) => {
      this.pre = data.filter((value) => {
        return ((value.idExpediteur == this.idUser
          || value.idRecespteur == this.idUser) && (value.idBienImmobilier == this.sentData.idBienImmobilier))
      });

      this.initial = this.pre;
    

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

  }


  envoyer(data: any, idSecondUser:any) {
    data.idSecondUser = idSecondUser
    this.take_.changeData(data);
  }


  NbreReservation(data: any[]) {
    var number = [];
    var message;
    var m = 0
    if (data != undefined) {
      for (let i = 0; i < data.length - 1; i++) {
        m = i
        for (let j = i + 1; j < data.length; j++) {
            if (data[j].date_heure > data[m].date_heure) {
                m = j
            }
        }
        message = data[m]
        data[m] = data[i]
        data[i] = message
    }
  
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

  infoUser(data: any[], id: any) {
    var e = { nom: '', prenom: '' };
    if (data != undefined) {
      data.map(data_ => {
        if (data_.idUtilisateur == id) {
          e = data_;
        }
      })
    }
    return e.nom + ' ' + e.prenom;
  }

  recentlyMessage(data: any[], id: any) {
   
    var j = 0, recent = data[0];
    if (data != undefined) {
      data = data.filter((value)=> {return (( value.idRecespteur == id &&  value.idExpediteur == this.idUser) || value.idExpediteur == id  && value.idRecespteur == this.idUser)})
      for (let i = 0; i < data.length; i++) {      
          if (recent.date_heure < data[i].date_heure) {
              j = i,
              recent = data[i];
          }
        }
          
      return data[j]

    } else {
      return []
    }


  }


  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: "Joindre: " + + " ",
      buttons: [{
        text: 'MTN: ',

        icon: 'call',
        handler: () => {
          // this.appel(a.num);
        }
      }, {
        text: 'SMS: ',
        icon: 'chatbubbles',
        handler: () => {
          //this.sendSMS(a.num,"Salut " + a.nom);
        }
      }, {
        text: 'ORANGE: ',
        icon: 'call',
        handler: () => {
          //this.appel(a.tel_orange);
        }
      }, {
        text: 'SMS: ',
        icon: 'chatbubbles',
        handler: () => {
          //this.sendSMS(a.tel_orange,"Salut " + a.nom);
        }
      },
      {
        text: 'email: ',
        icon: 'mail',
        handler: () => {
          console.log('Favorite clicked');
        }
      }
      ]
    });
    await actionSheet.present();
  }


}
