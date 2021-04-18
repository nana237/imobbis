import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GcelAjoutLocatairePage } from './gcel-ajout-locataire.page';

describe('GcelAjoutLocatairePage', () => {
  let component: GcelAjoutLocatairePage;
  let fixture: ComponentFixture<GcelAjoutLocatairePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GcelAjoutLocatairePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GcelAjoutLocatairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
