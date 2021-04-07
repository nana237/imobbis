import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TchatPPage } from './tchat-p.page';

describe('TchatPPage', () => {
  let component: TchatPPage;
  let fixture: ComponentFixture<TchatPPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TchatPPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TchatPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
