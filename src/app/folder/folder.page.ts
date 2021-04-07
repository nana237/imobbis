import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
//import { PopoverController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ServicesService } from '../services.service';
import { Prestataire } from '../prestataire';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})

export class FolderPage implements OnInit {

  public folder: string;
  public width = screen.width;
  public height = screen.height;
  public isSearchbarOpened: boolean = false;


  slideOpt = {

    speed: 2000,
    initialSlide: 0,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay: true,
    effect: 'cube',
    grabCursor: true

  };
   
   idUser = localStorage.getItem('idUser');
   typeUser = localStorage.getItem('typeUser');

  slideOpts = {
  slidesPerView: 3,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  on: {
    beforeInit() {
      const swiper = this;

      swiper.classNames.push(`${swiper.params.containerModifierClass}coverflow`);
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);

      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    },
    setTranslate() {
      const swiper = this;
      const {
        width: swiperWidth, height: swiperHeight, slides, $wrapperEl, slidesSizesGrid, $
      } = swiper;
      const params = swiper.params.coverflowEffect;
      const isHorizontal = swiper.isHorizontal();
      const transform$$1 = swiper.translate;
      const center = isHorizontal ? -transform$$1 + (swiperWidth / 2) : -transform$$1 + (swiperHeight / 2);
      const rotate = isHorizontal ? params.rotate : -params.rotate;
      const translate = params.depth;
      // Each slide offset from center
      for (let i = 0, length = slides.length; i < length; i += 1) {
        const $slideEl = slides.eq(i);
        const slideSize = slidesSizesGrid[i];
        const slideOffset = $slideEl[0].swiperSlideOffset;
        const offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;

         let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
        let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
        // var rotateZ = 0
        let translateZ = -translate * Math.abs(offsetMultiplier);

         let translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
        let translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;

         // Fix for ultra small values
        if (Math.abs(translateX) < 0.001) translateX = 0;
        if (Math.abs(translateY) < 0.001) translateY = 0;
        if (Math.abs(translateZ) < 0.001) translateZ = 0;
        if (Math.abs(rotateY) < 0.001) rotateY = 0;
        if (Math.abs(rotateX) < 0.001) rotateX = 0;

         const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

         $slideEl.transform(slideTransform);
        $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
        if (params.slideShadows) {
          // Set shadows
          let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
          if ($shadowBeforeEl.length === 0) {
            $shadowBeforeEl = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
            $slideEl.append($shadowBeforeEl);
          }
          if ($shadowAfterEl.length === 0) {
            $shadowAfterEl = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
            $slideEl.append($shadowAfterEl);
          }
          if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
          if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
        }
      }

       // Set correct perspective for IE10
      if (swiper.support.pointerEvents || swiper.support.prefixedPointerEvents) {
        const ws = $wrapperEl[0].style;
        ws.perspectiveOrigin = `${center}px 50%`;
      }
    },
    setTransition(duration) {
      const swiper = this;
      swiper.slides
        .transition(duration)
        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
        .transition(duration);
    }
  }
}
  constructor(

    private activatedRoute: ActivatedRoute,
    public actionSheetController: ActionSheetController,
    public alertController: AlertController,
    private take_: ServicesService,
    //private sms: SMS,
    private callNumber:CallNumber
  ) { }

   pre: any[];
   images: any[];
   users: any[];
   sms:any [];

  ngOnInit() {
    //this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.take_.getAcceuil().subscribe((data: Prestataire[]) => {
     console.log(data);
      this.pre = data;
      this.initial = data;
    },
    error => {
      alert("Mauvaise connexion!!!");
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

  ///partout
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

 initial:any[];
   
  initializePrestataire(){
     this.pre = this.initial;
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
