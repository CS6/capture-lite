import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { IonicModule } from '@ionic/angular';
import { getTranslocoModule } from 'src/app/transloco/transloco-root.module.spec';
import { ContactSelectionPage } from './contact-selection.page';

describe('ContactSelectionPage', () => {
  let component: ContactSelectionPage;
  let fixture: ComponentFixture<ContactSelectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactSelectionPage],
      imports: [
        IonicModule.forRoot(),
        getTranslocoModule(),
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatListModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactSelectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
