import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePratiqueComponent } from './page-pratique.component';

describe('PagePratiqueComponent', () => {
  let component: PagePratiqueComponent;
  let fixture: ComponentFixture<PagePratiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePratiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePratiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
