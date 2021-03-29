import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppartmodernePage } from './appartmoderne.page';

describe('AppartmodernePage', () => {
  let component: AppartmodernePage;
  let fixture: ComponentFixture<AppartmodernePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppartmodernePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppartmodernePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
