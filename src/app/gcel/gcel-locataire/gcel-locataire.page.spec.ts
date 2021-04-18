import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GcelLocatairePage } from './gcel-locataire.page';

describe('GcelLocatairePage', () => {
  let component: GcelLocatairePage;
  let fixture: ComponentFixture<GcelLocatairePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GcelLocatairePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GcelLocatairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
