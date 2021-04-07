import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TchatPage } from './tchat.page';

describe('TchatPage', () => {
  let component: TchatPage;
  let fixture: ComponentFixture<TchatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TchatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TchatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
