import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, LoadingController } from '@ionic/angular';
import { ServicesService } from '../../services.service';
import { HttpClient } from '@angular/common/http';
import { FolderPage} from '../../folder/folder.page';
@Component({
  selector: 'app-dashboard-specialiste',
  templateUrl: './dashboard-specialiste.page.html',
  styleUrls: ['./dashboard-specialiste.page.scss'],
})
export class DashboardSpecialistePage implements OnInit {
  public isSearchbarOpened: boolean = false;
  
  constructor(

    private load:LoadingController,
    private router: Router,
    private menu: MenuController,
    private http: HttpClient,
    private take_: ServicesService,

  ){
   
   }


  envoie(){

    this.load.create({
      message: "En cours de developpement..."
    }).then(loading=>{
      loading.present();
         setTimeout(() => {
           loading.dismiss();
         }, 1000);
    });

    this.router.navigate(['folder/1']);

   }

  ngOnInit() {
   
    this.envoie();
    this.router.navigate(['folder/1']);

  }
}
