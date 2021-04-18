import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-gcel-ajout-contrat',
  templateUrl: './gcel-ajout-contrat.page.html',
  styleUrls: ['./gcel-ajout-contrat.page.scss'],
})
export class GcelAjoutContratPage implements OnInit {

  															
  infoConnect = {
    login: '',
    password: '',
  }

  contrat = {
    idContrat:'',//
    libeleContrat:'contrat 237',
    fichier:'',//,
    typeContrat:'Achat',
    dateDebut:'',
    dateFin:'',
    prix:'200000',
    unitePaiment:'30',
    nbUnitePaiment:'6',
    eau:'oui',
    electricite:'non',
    etat:'créer',//
    idOp:null,
    idLocataire:'2',//
    idPrestataire:'75',// nom du prestataire a la place
    idBienImmobilier:'53',
    dateCreation:new Date().toJSON().split('T')[0]
  }


  formPrincipale = true
  formVerifPassword = false
  infoUser
  bienImos
  bienImoChoisi
  locataires
  // locataireChoisi = {
  //   idLocataire:'',
  //   nom:'',
  //   prenom:''
  // }
  locataireChoisi ={
    idLocataire:'',
    nom:'',
    prenom:'',
    situationMatrimonial:'',
    profession:'',
    numCNI:'',
    tel:'',
    nationalite:'',
    ville:'',
    quartier:'',
    nbEnfant:'',
    idBailleur:'',
    idUtilisateurInitial:'',
    dataAjout:''
  }
  minDate: string = new Date().toISOString()
  maxDate: any = (new Date()).getFullYear() + 100
  step = 1
  step1 = true
  step2 = false
  step3 = false
  step4 = false
  step5 = false

  constructor(
    private take_:ServicesService,
    private toastController:ToastController,
    private router:Router
  ) {
    this.infoUser=this.take_.getInfoUser()
    this.infoConnect.login=this.infoUser.login
    if (this.take_.modifLocataire) {
      //this.contrat.idLocataire=this.take_.locataire.idLocataire
      this.locataireChoisi = take_.locataire
      // this.locataireChoisi.idLocataire=this.take_.locataire.idLocataire
      // this.locataireChoisi.nom=this.take_.locataire.nom
      // this.locataireChoisi.prenom=this.take_.locataire.prenom
    }
    this.getBienImo()
    this.getLocataire()
   }

  ngOnInit() {
  }

  toggleForms(){
    this.formPrincipale = !this.formPrincipale
    this.formVerifPassword = !this.formVerifPassword
  }

  // verifierPassword(){
  //   console.log("verfication du mot de passe")
  //   const uploadData = new FormData();

  //   for (const key in this.infoConnect) {
  //     if (Object.prototype.hasOwnProperty.call(this.infoConnect, key)) {
  //       const val = this.infoConnect[key];        
          
  //           uploadData.append(key, val + "");      
  //     }
  //   }

  //   this.take_.Seconnecter(uploadData).subscribe((data: any) => {  
  //     console.log('data')
  //     console.log(data)
  //     console.log(data[0])
  //     console.log('end data')

  //   },
  //     error => {
  //       alert("mot de pass éroné")
  //     });
  //   // if passwordCorrect
   
  // }
  
  verifierPassword(){

    console.log("verfication du mot de passe")
    const uploadData = new FormData();

    for (const key in this.infoConnect) {
      if (Object.prototype.hasOwnProperty.call(this.infoConnect, key)) {
        const val = this.infoConnect[key];        
          
            uploadData.append(key, val + "");      
      }
    }

    this.take_.Seconnecter(uploadData).subscribe((data: any) => {  
      console.log('data')
      console.log(data)
      console.log(data[0])
      console.log('end data')

      this.contrat.idContrat = ''
      this.contrat.dateDebut = this.contrat.dateDebut.split('T')[0];
      this.contrat.dateFin = this.contrat.dateFin.split('T')[0];
      this.contrat.etat = 'créer'
      this.contrat.idOp = ''
      if (this.locataireChoisi) {
      this.contrat.idLocataire = this.locataireChoisi.idLocataire
      }
      if (this.take_.modifLocataire) {
        this.contrat.idLocataire = this.take_.locataire.idLocataire
      }
      this.contrat.idPrestataire = this.infoUser.idUtilisateur
      this.contrat.idBienImmobilier = this.bienImoChoisi.idBienImmobilier
      
      if (this.take_.modifLocataire) {
        this.ajouterLocataire()
      }else{
        this.logForm(this.contrat)
      }
    },
      error => {
        alert("mot de pass éroné")
      })
  }

  verifierForm(){
      // verification
      let formValide = true
      if (formValide) {
        this.formPrincipale=false
        this.formVerifPassword=true
      } else {
        //message d'erreur
      }
  }

  setInfoUser(data){
                       
    localStorage.removeItem("idUser");
    localStorage.setItem("idUser", data.idUtilisateur);
    localStorage.setItem("typeUser", data.typeUtilisateur);
    localStorage.setItem("loginUser", data.login);
    localStorage.setItem("emailUser", data.email); 
    localStorage.setItem("telUser", data.tel);    
    localStorage.setItem("paysUser", data.pays);    
    return 0
  }


  logForm(dataToSend){
    const uploadData = new FormData();
    for (const key in this.contrat) {
      if (Object.prototype.hasOwnProperty.call(this.contrat, key)) {

        const val = this.contrat[key];        
           
            uploadData.append(key, val + "");      
      }
    }
    console.log(dataToSend)
    this.take_.creerContrat(uploadData).subscribe((data: any) => {  
      console.log(data) 
      this.resetPage()
      this.presentToast('votre nouveau contrat a été créé avec succès')
      this.router.navigate(['dashboard'])
    })
  }
  
  getBienImo(){
    const uploadData = new FormData();
    uploadData.append('idUtilisateur', this.infoUser.idUtilisateur);      
    this.take_.getAllPoste_Prestataire(uploadData).subscribe(data=>{
      console.log(data)
      this.bienImos=data
      this.bienImoChoisi = this.bienImos[0]
      console.log('bienImoChoisi')
      console.log(this.bienImoChoisi)

    })
  }

  getLocataire(){
    const uploadData = new FormData();
    uploadData.append('idUtilisateur', this.infoUser.idUtilisateur);      
    this.take_.getAllLocataireBailleur(uploadData).subscribe(data=>{
      console.log('locataires')
      console.log(data)
      this.locataires=data
      if (this.locataires[0]) {
      this.locataireChoisi = this.locataires[0]
    }
      console.log('locataire choisie')
      console.log(this.locataireChoisi)

    })
  }

  ajouterLocataire(){
    const uploadData = new FormData();

    for (const key in this.locataireChoisi) {
      if (Object.prototype.hasOwnProperty.call(this.locataireChoisi, key)) {
        const val = this.locataireChoisi[key];        
          
            uploadData.append(key, val + "");      
      }
    }
    this.take_.creerLocataire(uploadData).subscribe(data=>{
      console.log(data)
      console.log('locataire créé avec succès')
      this.presentToast('votre nouveau locataire a été créé avec succès')
      this.logForm(this.contrat)
    })
  }

  onChangeBienImoChoisi(bienImmo){
    this.bienImoChoisi = bienImmo
  }

  async presentToast(mymessage) {
    const toast = await this.toastController.create({
      message: mymessage,
      duration: 2000
    });
    toast.present();
  }

  resetPage(){
    this.infoConnect = {
      login: '',
      password: '',
    }
  
    this.contrat = {
      idContrat:'',//
      libeleContrat:'',
      fichier:'',//,
      typeContrat:'',
      dateDebut:'',
      dateFin:'',
      prix:'',
      unitePaiment:'30',
      nbUnitePaiment:'6',
      eau:'non',
      electricite:'non',
      etat:'créer',//
      idOp:null,
      idLocataire:'',//
      idPrestataire:'',// nom du prestataire a la place
      idBienImmobilier:'',
      dateCreation:new Date().toJSON().split('T')[0]
    }
  
  
    this.formPrincipale = true
    this.formVerifPassword = false
    this.infoUser
    this.bienImos
    this.bienImoChoisi
    this.locataires
    // locataireChoisi = {
    //   idLocataire:'',
    //   nom:'',
    //   prenom:''
    // }
    this.locataireChoisi ={
      idLocataire:'',
      nom:'',
      prenom:'',
      situationMatrimonial:'',
      profession:'',
      numCNI:'',
      tel:'',
      nationalite:'',
      ville:'',
      quartier:'',
      nbEnfant:'',
      idBailleur:'',
      idUtilisateurInitial:'',
      dataAjout:''
    }
    this.step = 1
    this.step1 = true
    this.step2 = false
    this.step3 = false
    this.step4 = false
    this.step5 = false

    this.take_.modifLocataire=false
  }

}
