import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AutrePage } from './autre.page';

describe('AutrePage', () => {
  let component: AutrePage;
  let fixture: ComponentFixture<AutrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AutrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
