import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppartementPage } from './appartement.page';

describe('AppartementPage', () => {
  let component: AppartementPage;
  let fixture: ComponentFixture<AppartementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppartementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppartementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
