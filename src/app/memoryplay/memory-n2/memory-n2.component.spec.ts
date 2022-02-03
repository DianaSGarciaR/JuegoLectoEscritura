import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryN2Component } from './memory-n2.component';

describe('MemoryN2Component', () => {
  let component: MemoryN2Component;
  let fixture: ComponentFixture<MemoryN2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoryN2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryN2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
