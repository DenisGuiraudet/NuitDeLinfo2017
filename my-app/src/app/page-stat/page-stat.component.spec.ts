import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStatComponent } from './page-stat.component';

describe('PageStatComponent', () => {
  let component: PageStatComponent;
  let fixture: ComponentFixture<PageStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
