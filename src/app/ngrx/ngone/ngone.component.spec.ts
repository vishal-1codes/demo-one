import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoneComponent } from './ngone.component';

describe('NgoneComponent', () => {
  let component: NgoneComponent;
  let fixture: ComponentFixture<NgoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgoneComponent]
    });
    fixture = TestBed.createComponent(NgoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
