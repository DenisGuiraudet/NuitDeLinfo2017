import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAidComponent } from './page-aid.component';

describe('PageAidComponent', () => {
  let component: PageAidComponent;
  let fixture: ComponentFixture<PageAidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
