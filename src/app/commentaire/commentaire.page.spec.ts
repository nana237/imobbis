import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommentairePage } from './commentaire.page';

describe('CommentairePage', () => {
  let component: CommentairePage;
  let fixture: ComponentFixture<CommentairePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentairePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommentairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
