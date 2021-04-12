import { Component, OnInit } from '@angular/core';
import { ImagePicker, ImagePickerOptions, OutputType } from '@ionic-native/image-picker/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { Platform, ModalController, IonRouterOutlet, LoadingController } from '@ionic/angular';
import { ModalPostPage } from '../modal-post/modal-post.page';
import { ServicesService } from '../services.service';
import { HttpClient } from '@angular/common/http';
import { FormArray, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})

export class PostPage implements OnInit {

  constructor(
    private load:LoadingController,
    private imagePicker: ImagePicker,
    private camera: Camera,
    public file: File,
    public plt: Platform,
    public service_: ServicesService,
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
    private router:Router,
    private http:HttpClient) {
    if (this.plt.is('hybrid')) {
      // Cela ne s'affiche que sur android

      console.log("oui");

    }
  }


  envoie(){

    this.load.create({
      message: "please wait..."
    }).then(loading=>{
      loading.present();

         setTimeout(() => {
           loading.dismiss();
         }, 2000);

    })
   }

  //modalll
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPostPage,
      componentProps: {
        data: 5
      },
      cssClass: 'dialod-modal',
      swipeToClose: true,
      // presentingElement: this.routerOutlet.nativeEl


    });
    return await modal.present();
  }

  //end

  public isSearchbarOpened: boolean = false;
  images: any = []

  pickMultipleImages() {

    var options: ImagePickerOptions = {
      maximumImagesCount: 8,
      width: 100,
      height: 100

    }

    this.imagePicker.getPictures(options).then((results) => {
      for (var interval = 0; interval < results.length; interval++) {
        let filename = results[interval].substring(results[interval].lastIndexOf('/') + 1)
        let path = results[interval].substring(0, results[interval].lastIndexOf('/') + 1)
        this.file.readAsDataURL(path, filename).then((base64string) => {
          this.images.push(base64string);
        })
      }
    })
  }

  fil: File[];
  affiche: File[]

  image: any = [];

  demande = {

    typeBienImmobilier: '',
    meubler: 0,
    statut: 'à Louer',
    ville: '',
    quartier: '',
    prixTaxerlocation: '',
    nbChambre: 0,
    nbSalon: 0,
    nbDouche: 0,
    parking: 0,
    nbCuisine: 0,
    description: '',
    dimension_terrain: '',
    type_immobilier: '',
    //images: [],   
    idBienImmobilier:8,
    pays:"Cameroun",
    terrace:0,
    jardin:0,
    piscine:0,
    cloture:0,
    classe:"3",
    photo:null,
    video:"",
    dernierPrixLocation:30000,
    prixTaxerVente:0,
    dernierPrixVente:0,
    datePublication:"2020-09-06",   
    idAgentImmobilier:'',
  

  };

  upload() {
    let options: ImagePickerOptions = {
      maximumImagesCount: 8,
      outputType: OutputType.FILE_URL

    }
    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        console.log('Image URI: ' + results[i]);
      }
    }, (err) => { });


  }




  changeListener($event): void {
    this.fil = $event.target.files;


    for (var i = 0; i < this.fil.length; i++) {
      console.log(this.fil[i])

    }


  }

  take() {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }


  async addPhoto(source: string) {

    if (source === 'camera') {
      console.log('camera');
      const cameraPhoto = await this.openCamera();
      this.image.push('data:image/jpg;base64,' + cameraPhoto);

    } else {
      console.log('library');
      const libraryImage = await this.openLibrary();

      this.image.push('data:image/jpg;base64,' + libraryImage);

    }
  }

  async openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000,
      sourceType: this.camera.PictureSourceType.CAMERA
    };
    return await this.camera.getPicture(options);
  }

  async openLibrary() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };
    return await this.camera.getPicture(options);
  }


  logForm() {

    this.demande.photo = this.fil
    console.log(this.demande);
    this.service_.postPost(this.demande).subscribe((data: any) => {

    },
      error => {

        alert(error);

      });

  }


  ngOnInit() {

  }


  appareilForm: FormGroup;
  imagess=null;
  videos = null;
  monImage=null;

  onFileChanged(event){

    this.imagess= event.target.files;
    this.fil = this.imagess;
    this.monImage= event.target.files[0];
    // Affichage test
    console.log(this.imagess);
    console.log(this.monImage);

  }
  
  onVideoChanged(event){

    this.videos= event.target.files;
    //this.monImage= event.target.files[0];
    // Affichage test
    console.log(this.videos);
    //console.log(this.monImage);

  }

  onUploadData(){

    const uploadData = new FormData();
    uploadData.append('myFile',this.monImage, this.monImage.name);
    this.http.post('https://blow-corporation.com/imobbis/appImobbisJSON/poster4.php',uploadData,{
      reportProgress:true,
      observe:'events'
    }).subscribe(
      event=>{
        console.log(event); // handle event here
      }
    )
    
  }
  onUploadData2(){
    //initialisation

    //console.log("Patientez pendant que l'appilcation télècharge la photo et la vidéo!!!");
    this.envoie();
    this.demande.photo = this.imagess;
    this.demande.video = this.videos;
    this.demande.idAgentImmobilier = localStorage.getItem('idUser');
    this.demande.typeBienImmobilier = this.demande.type_immobilier;
    const uploadData = new FormData();

    for (const key in this.demande) {
      if (Object.prototype.hasOwnProperty.call(this.demande, key)) {
        const val = this.demande[key];
        
        if (key=="photo") {
       

          for (let i = 0; i < val.length; i++) {
            const image = val[i];
            uploadData.append('myPhoto'+i, image, image.name);
          }
        } else{
          if (key=="video") {

           
           if (val) {
            for (let i = 0; i < val.length; i++) {
              const video = val[i];
              uploadData.append('myVideo'+i, video, video.name);
            }
           }
          }else{
          
            
            uploadData.append(key, val + "");
          }
        }
        
        
      }
    }
    
    
/*
    for (let i = 0; i < this.images.length; i++) {
      const image = this.images[i];
      uploadData.append('myFile'+i, image, image.name);
    }
  
    uploadData.append('valTest',"test reussi avec sucess");
   */

  /*  this.images.forEach(image => {
      uploadData.append('myFile'+i, image, image.name);
      i++;
    }); */
   // uploadData.append('myFile',this.monImage, this.monImage.name);
   // uploadData.append('myFile2',this.monImage, this.monImage.name);

    this.http.post('https://blow-corporation.com/imobbis/appImobbisJSON/poster5.php',uploadData,{
      reportProgress:true,
      observe:'events'
    }).subscribe(
      event=>{
        console.log(event); // handle event here
        //this.router.navigate(['folder/1']);  
      }
    )    
  }

  getDescriptionArray(){
    return this.appareilForm.get('description') as FormArray
  }


}
