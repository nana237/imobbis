import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { HttpClient } from '@angular/common/http';
import { Prestataire } from '../prestataire';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage implements OnInit {

  public isSearchbarOpened : boolean = false;
  constructor(
    private http:HttpClient,
    private take_: ServicesService,) { }

    pre:Prestataire[];
    initial:any[];
    users: any[];
    idUser = localStorage.getItem('idUser');
    typeUser = localStorage.getItem('typeUser');
 
  ngOnInit() {

    this.take_.getAllMessage().subscribe((data: any[]) => {
     
      this.pre = data.filter((value)=>{ return (value.idExpediteur == this.idUser || value.idRecespteur == this.idUser)});
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
  //eliminer les doublons
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



}
