import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HightechPage } from './hightech.page';

describe('HightechPage', () => {
  let component: HightechPage;
  let fixture: ComponentFixture<HightechPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HightechPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HightechPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
