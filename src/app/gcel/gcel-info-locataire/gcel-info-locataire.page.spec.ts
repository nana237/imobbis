import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GcelInfoLocatairePage } from './gcel-info-locataire.page';

describe('GcelInfoLocatairePage', () => {
  let component: GcelInfoLocatairePage;
  let fixture: ComponentFixture<GcelInfoLocatairePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GcelInfoLocatairePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GcelInfoLocatairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
