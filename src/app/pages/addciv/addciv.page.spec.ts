import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcivPage } from './addciv.page';

describe('AddcivPage', () => {
  let component: AddcivPage;
  let fixture: ComponentFixture<AddcivPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcivPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcivPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
