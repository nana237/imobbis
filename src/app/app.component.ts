import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ServicesService } from './services.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;

  public appPages = [
    {
      title: 'Acceuil',
      url: '/folder/Acceuil',
      icon: 'home'
    },
    {
      title: 'Les réservations',
      url: '/reservation',
      icon: 'at'
    },
    {
      title: 'Nos spécialistes',
      url: '',
      icon: 'people'
    },
    {
      title: 'Gcel Immobilier',
      url: '/dashboard',
      icon: 'aperture'
    },
    {
      title: 'Compte',
      url: '/compte',
      icon: 'man'
    },
    {
      title: 'Paramètre',
      url: '',
      icon: 'settings'
    },
    {
      title: 'Aide et commentaire',
      url: '',
      icon: 'help-circle'
    },
   
  ];

  public valide : boolean = false;

deconnexion(){
   localStorage.clear();  
   this.router.navigate(['connexion']); 
}
 
 
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private router: Router,
    private statusBar: StatusBar,
    private take_: ServicesService
  ) {
   
    this.initializeApp();

    //this.telUser = localStorage.getItem('telUser')
    //this.loginUser = localStorage.getItem('loginUser')
    //this.emailUser = localStorage.getItem('emailUser')
    //this.typeUser = localStorage.getItem('typeUser')
  }

  initializeApp() {
    this.platform.ready().then(() => {
      
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  telUser = localStorage.getItem('telUser');
  loginUser= localStorage.getItem('loginUser');
  emailUser = localStorage.getItem('emailUser');
  typeUser= localStorage.getItem('typeUser');

  ionViewWillEnter(){
    let infoUser = this.take_.getInfoUser()
     infoUser = this.take_.infoUser
    this.telUser = infoUser.telUser
    this.loginUser = infoUser.loginUser
    this.emailUser = infoUser.emailUser
   this.typeUser = infoUser.typeUser
   console.log("on view will enter")
   window.location.assign('/');
  }

  ngOnInit() {
   // localStorage.clear();    
    const path = window.location.pathname.split('acceuil/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }

     this.telUser = localStorage.getItem('telUser')
     this.loginUser = localStorage.getItem('loginUser')
     this.emailUser = localStorage.getItem('emailUser')
     this.typeUser = localStorage.getItem('typeUser')
  }
}
