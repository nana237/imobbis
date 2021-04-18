import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-gcel-info-locataire',
  templateUrl: './gcel-info-locataire.page.html',
  styleUrls: ['./gcel-info-locataire.page.scss'],
})
export class GcelInfoLocatairePage implements OnInit {
  Locataire
  constructor(
    private take_:ServicesService
  ) { 
    this.Locataire = this.take_.locataireSelectioner
  }

  ngOnInit() {
  }

}
