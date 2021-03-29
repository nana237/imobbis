import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VillaMeublePage } from './villa-meuble.page';

describe('VillaMeublePage', () => {
  let component: VillaMeublePage;
  let fixture: ComponentFixture<VillaMeublePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillaMeublePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VillaMeublePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
