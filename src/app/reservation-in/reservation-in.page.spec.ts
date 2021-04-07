import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReservationInPage } from './reservation-in.page';

describe('ReservationInPage', () => {
  let component: ReservationInPage;
  let fixture: ComponentFixture<ReservationInPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationInPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReservationInPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
