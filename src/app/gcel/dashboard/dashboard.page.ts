import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  Locataires
  infoUser
  constructor(
    private router:Router,
    private take_:ServicesService
  ) {
    this.infoUser = this.take_.getInfoUser()
    this.getAllLocataire()
   }

  ngOnInit() {
  }

  getAllLocataire(){
    const uploadData = new FormData();    
    console.log('this.infoUser')   
    console.log(this.infoUser)   
    uploadData.append('idBailleur', this.infoUser.idUtilisateur + "");      
  
    this.take_.getAllLocataireBailleur(uploadData).subscribe((data: any) => {  
      console.log('locataire') 
      console.log(data) 
      this.Locataires = data
      let myloctest = [1,2,3]
      myloctest.map(val=>{
        return val
      })
      console.log('myloctest')
      console.log(myloctest)

    })
  }

  getContratLocataire(idLocataire){
    const uploadData = new FormData();    
    console.log('idLocataire')   
    console.log(idLocataire)   
    uploadData.append('idLocataire', idLocataire + "");      
  
    this.take_.getAllContrateLocataire(idLocataire).subscribe((data: any) => {  
      console.log('contrat') 
      console.log(data)
      return data
    })
  }
  theTest = [1,2,3,4,5,6,7,8,9]

  goToInfoLoc(locataire){
    this.take_.locataireSelectioner = locataire
    this.router.navigate(['gcel-info-locataire'])
  }
  
  goToAjoutLoc(){
    this.router.navigate(['gcel-ajout-locataire'])
  }

}
