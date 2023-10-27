import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgthreeComponent } from './ngthree.component';

describe('NgthreeComponent', () => {
  let component: NgthreeComponent;
  let fixture: ComponentFixture<NgthreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgthreeComponent]
    });
    fixture = TestBed.createComponent(NgthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
