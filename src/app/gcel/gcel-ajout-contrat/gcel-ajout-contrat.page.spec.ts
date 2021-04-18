import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GcelAjoutContratPage } from './gcel-ajout-contrat.page';

describe('GcelAjoutContratPage', () => {
  let component: GcelAjoutContratPage;
  let fixture: ComponentFixture<GcelAjoutContratPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GcelAjoutContratPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GcelAjoutContratPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
