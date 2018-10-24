import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BkFormComponent } from './bk-form.component';

describe('BkFormComponent', () => {
  let component: BkFormComponent;
  let fixture: ComponentFixture<BkFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BkFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
