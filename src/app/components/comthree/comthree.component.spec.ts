import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComthreeComponent } from './comthree.component';

describe('ComthreeComponent', () => {
  let component: ComthreeComponent;
  let fixture: ComponentFixture<ComthreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComthreeComponent]
    });
    fixture = TestBed.createComponent(ComthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
