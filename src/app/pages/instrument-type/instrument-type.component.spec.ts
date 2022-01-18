import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentTypeComponent } from './instrument-type.component';

describe('InstrumentTypeComponent', () => {
  let component: InstrumentTypeComponent;
  let fixture: ComponentFixture<InstrumentTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstrumentTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
