import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalPostPage } from './modal-post.page';

describe('ModalPostPage', () => {
  let component: ModalPostPage;
  let fixture: ComponentFixture<ModalPostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPostPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
