import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilltableComponent } from './skilltable.component';

describe('SkilltableComponent', () => {
  let component: SkilltableComponent;
  let fixture: ComponentFixture<SkilltableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkilltableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkilltableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
