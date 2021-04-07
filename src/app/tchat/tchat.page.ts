import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicesService } from '../services.service';
import { HttpClient } from '@angular/common/http';
import { Prestataire } from '../prestataire';
@Component({
  selector: 'app-tchat',
  templateUrl: './tchat.page.html',
  styleUrls: ['./tchat.page.scss'],
})
export class TchatPage implements OnInit {

  @ViewChild('content') private content: any;
 
  demande = {
    
    idMessage:0,
    idRecespteur: 0,
    idExpediteur: 0,
    idBienImmobilier: 0,
    texte: '',
    date_heure: ""

  };
 
  newMsg = ''

  sendMessage() {

    this.demande.idExpediteur = Number.parseInt(this.idUser);
    this.demande.texte = this.newMsg;
    this.demande.date_heure = "";
    this.demande.idRecespteur = this.sentData.idAgentImmobilier;
    this.demande.idBienImmobilier = this.sentData.idBienImmobilier;
   
    const uploadData = new FormData();
    for (const key in this.demande) {

      if (Object.prototype.hasOwnProperty.call(this.demande, key)) {    
        const val = this.demande[key];        
        uploadData.append(key, val + "");   
      }

    }
 
    this.take_.sendSms(uploadData).subscribe((data: any) => {
   
    },
      error => {
        console.log(error);
      });

    
      this.pre.push(
           this.demande
      );
      this.newMsg = '';
      setTimeout(() => {
        this.content.scrollToBottom(15);
      }, 5);

  }


  constructor(

    private http: HttpClient,
    private take_: ServicesService,

    ) { }


  pre: any[];
  initial: any[];
  sentData: any;
  users: any[];
  idUser = localStorage.getItem('idUser');
  typeUser = localStorage.getItem('typeUser');

  ngOnInit() {
    this.take_.serviceData
      .subscribe(data => (
        this.sentData = data
      ));

      this.getSms();
 
    this.take_.getAllUser().subscribe((data: any[]) => {
      this.users = data;
     
    },
      error => {
        alert("Mauvaise connexion!!!");
      }
    );
  }


  getSms(){
    this.take_.getAllMessage().subscribe((data: any[]) => {

      data = data.filter((value) => {
        return ((value.idExpediteur == this.idUser
          || value.idRecespteur == this.idUser) && (value.idExpediteur == this.sentData.idAgentImmobilier
            || value.idRecespteur == this.sentData.idAgentImmobilier) && (value.idBienImmobilier == this.sentData.idBienImmobilier))
      });
      this.pre = data
      this.initial = data;
    
  if(data!== undefined && data !==[]){
      data.forEach(action => {
       
        console.log('Message: ' + action.texte)
    //  if(action != undefined && action !== null){

       //this.initial.push({
       /// idMessage:action.payload.exportVal().idMessage,
       // idRecespteur: action.payload.exportVal().idRecespteur,
        //idExpediteur: action.payload.exportVal().idExpediteur,
       // idBienImmobilier: action.payload.exportVal().idBienImmobilier,
        //texte: action.payload.exportVal().texte,
        //date_heure: action.payload.exportVal().date_heure,

      // });
      // }

      });

    }

       // filtrer ici
    

      this.pre = this.initial;


    

     
    },
      error => {
        alert("Mauvaise connexion!!!");
      }
    );

  }


  envoyer(data: any) {
    this.take_.changeData(data);
  }


  NbreReservation(data: any[], id: any) {
    var number = [];
    data.map(data_ => {
      if (data_.idRecespteur == this.idUser && data_.idExpediteur !== this.idUser) {
        number.push(data_.idExpediteur);
      } else {
        if (data_.idRecespteur !== this.idUser && data_.idExpediteur == this.idUser) {
          number.push(data_.idRecespteur);
        }
        return [...new Set(number)];
      }
    })

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


}
