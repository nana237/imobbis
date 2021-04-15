import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InscriptionPrestatairePage } from './inscription-prestataire.page';

describe('InscriptionPrestatairePage', () => {
  let component: InscriptionPrestatairePage;
  let fixture: ComponentFixture<InscriptionPrestatairePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptionPrestatairePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InscriptionPrestatairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
