import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prestataire } from 'src/app/prestataire';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-gcel-ajout-locataire',
  templateUrl: './gcel-ajout-locataire.page.html',
  styleUrls: ['./gcel-ajout-locataire.page.scss'],
})
export class GcelAjoutLocatairePage implements OnInit {


  locataire = {
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
    idUtilisateurInitial:null,
    dataAjout:''
  }

  numTel={
    code:'',
    tel:''
  }

  country: any;
  formAjoutLocataire = true;
  infoUser
  step = 1
  step1 = true
  step2 = false
  step3 = false
  step4 = false

  constructor(
    private take_:ServicesService,
    private router: Router
  ) {
    
   }

  ngOnInit() {
    
    console.log(this.take_.getInfoUser())
    let infoUser=this.take_.getInfoUser()
    
    this.take_.getAllcontries().subscribe((data: Prestataire[]) => {    
      this.country = data;
      console.log(this.country)
      },
      error => {
        alert("Mauvaise connexion!!!");
      })
  }
  
  toggleForms(){

  }
  
  verifierPassword(){

    this.infoUser=this.take_.getInfoUser()
    this.locataire.idBailleur = this.infoUser.idUtilisateur
    this.locataire.idUtilisateurInitial = ''
    this.locataire.idLocataire = ''
    this.locataire.tel = this.numTel.code + this.numTel.tel
    this.logForm(this.locataire)

  }

  verifierForm(){
    
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
    for (const key in this.locataire) {
      if (Object.prototype.hasOwnProperty.call(this.locataire, key)) {

        const val = this.locataire[key];        
           
            uploadData.append(key, val + "");      
      }
    }
    console.log(dataToSend)
    
    this.take_.setLocataire(this.locataire)
    this.resetPage()
    this.router.navigate(['gcel-ajout-contrat'])
    // this.take_.creerLocataire(uploadData).subscribe((data: any) => {  
    //   console.log(data) 
    //   this.take_.setLocataire(this.locataire)
    //   this.router.navigate(['gcel-ajout-contrat'])
    // })
  }

  resetPage(){
    this.locataire = {
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
      idUtilisateurInitial:null,
      dataAjout:''
    }
  
    this.numTel={
      code:'',
      tel:''
    }
  
    this.formAjoutLocataire = true;
    this.infoUser
    this.step = 1
    this.step1 = true
    this.step2 = false
    this.step3 = false
    this.step4 = false
  }

}
