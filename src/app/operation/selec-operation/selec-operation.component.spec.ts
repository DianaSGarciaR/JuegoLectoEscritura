import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecOperationComponent } from './selec-operation.component';

describe('SelecOperationComponent', () => {
  let component: SelecOperationComponent;
  let fixture: ComponentFixture<SelecOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
