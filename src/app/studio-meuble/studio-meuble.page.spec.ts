import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudioMeublePage } from './studio-meuble.page';

describe('StudioMeublePage', () => {
  let component: StudioMeublePage;
  let fixture: ComponentFixture<StudioMeublePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudioMeublePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudioMeublePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
