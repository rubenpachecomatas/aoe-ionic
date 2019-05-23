import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModcivPage } from './modciv.page';

describe('ModcivPage', () => {
  let component: ModcivPage;
  let fixture: ComponentFixture<ModcivPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModcivPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModcivPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
