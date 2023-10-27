import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgtwoComponent } from './ngtwo.component';

describe('NgtwoComponent', () => {
  let component: NgtwoComponent;
  let fixture: ComponentFixture<NgtwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgtwoComponent]
    });
    fixture = TestBed.createComponent(NgtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
