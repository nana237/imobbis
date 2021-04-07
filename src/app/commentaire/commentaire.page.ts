import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ServicesService } from '../services.service';
import { HttpClient } from '@angular/common/http';
import { Prestataire } from '../prestataire';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.page.html',
  styleUrls: ['./commentaire.page.scss'],
})
export class CommentairePage implements OnInit {
  @ViewChild('content') private content: any;
  constructor(
    public actionSheetController: ActionSheetController,
    public alertController: AlertController,
    private http: HttpClient,
    private callNumber: CallNumber,
    private take_: ServicesService,) { }

  pre: any[];
  initial: any[];
  sentData: any;
  users: any[];
  toff: Prestataire[];
  idUser = localStorage.getItem('idUser');
  typeUser = localStorage.getItem('typeUser');
  sms: any[];

  demande = {

    idUtilisateur: 0,
    idBienImmo: 0,
    contenu: '',
    dateHeure: 0,
    idCom: 0,
    idComRef: 0,
    typeCom: ''

  };

  newMsg = ''

  sendMessage() {
    this.demande.idUtilisateur = Number.parseInt(this.idUser);
    this.demande.contenu = this.newMsg;
    //this.demande.date_heure = new Date().toJSON(); 
    this.demande.idBienImmo = this.sentData.idBienImmobilier;

    const uploadData = new FormData();
    for (const key in this.demande) {
      if (Object.prototype.hasOwnProperty.call(this.demande, key)) {

        const val = this.demande[key];

        uploadData.append(key, val + "");
      }
    }

    console.log(this.demande)

    this.take_.sendCommentaire(uploadData).subscribe((data: any) => {

    },
      error => {
        console.log(error);
      });

    this.pre.push(

      this.demande
      
    )


    this.newMsg = '';
    setTimeout(() => {
      this.content.scrollToBottom(15);
    }, 5);


  }

  images: any[];

  envoyer(data: any) {
    this.take_.changeData(data);
  }

  ngOnInit() {

    this.take_.serviceData
      .subscribe(data => (
        this.sentData = data
      ));


    this.take_.getAcceuil().subscribe((data: any[]) => {

      this.toff = data.filter((value) => { return value.idBienImmobilier == this.sentData.idBienImmobilier });


    },
      error => {
        alert("pp " + error);
      }
    );

    this.take_.getToff().subscribe((data: Prestataire[]) => {
      this.images = data;


    },
      error => {
        alert("Mauvaise connexion!!!");
      }
    );

    this.getCommentaire();

    this.take_.getAllUser().subscribe((data: any[]) => {
      this.users = data;
    },
      error => {
        alert("Mauvaise connexion!!!");
      }
    );

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



  joindreToff(image: any, id: any, imagess: any[]) {

    var tab = [];
    tab.push(image);
    for (var i = 0; i < imagess.length; i++) {
      if (id == imagess[i].idBienImmobilier) {
        tab.push(imagess[i].imageP)

      }
    }

    return tab;
  }



  getCommentaire() {

    this.take_.getAllCommentaire().subscribe((data: any[]) => {
      this.pre = data.filter((value) => { return value.idBienImmo == this.sentData.idBienImmobilier });
      this.initial = this.pre;
      console.log(this.pre);

    },
      error => {
        alert("Mauvaise connexion!!!");
      });

  }



  NbreReservation(data: any[], id) {
    var number = [];
    if (data != undefined) {
      data = data.filter((value) => {
        return ((value.idBienImmobilier == id))
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

  appel(number: any) {
    this.callNumber.callNumber(number, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));

  }
  async presentActionSheet(data) {
    const actionSheet = await this.actionSheetController.create({
      header: "Joindre: " + data.nom + " " + data.prenom,
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

}
