import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VillaPage } from './villa.page';

describe('VillaPage', () => {
  let component: VillaPage;
  let fixture: ComponentFixture<VillaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VillaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
