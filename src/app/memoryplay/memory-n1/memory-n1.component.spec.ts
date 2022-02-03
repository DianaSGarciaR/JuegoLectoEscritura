import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryN1Component } from './memory-n1.component';

describe('MemoryN1Component', () => {
  let component: MemoryN1Component;
  let fixture: ComponentFixture<MemoryN1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoryN1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryN1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
