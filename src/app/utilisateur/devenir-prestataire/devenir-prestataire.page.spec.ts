import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DevenirPrestatairePage } from './devenir-prestataire.page';

describe('DevenirPrestatairePage', () => {
  let component: DevenirPrestatairePage;
  let fixture: ComponentFixture<DevenirPrestatairePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevenirPrestatairePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DevenirPrestatairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
