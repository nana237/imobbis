import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardSpecialistePage } from './dashboard-specialiste.page';

describe('DashboardSpecialistePage', () => {
  let component: DashboardSpecialistePage;
  let fixture: ComponentFixture<DashboardSpecialistePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSpecialistePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardSpecialistePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
