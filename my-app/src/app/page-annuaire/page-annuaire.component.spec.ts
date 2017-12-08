import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAnnuaireComponent } from './page-annuaire.component';

describe('PageAnnuaireComponent', () => {
  let component: PageAnnuaireComponent;
  let fixture: ComponentFixture<PageAnnuaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAnnuaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAnnuaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
