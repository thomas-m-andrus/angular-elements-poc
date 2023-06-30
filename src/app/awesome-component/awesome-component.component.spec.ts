import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomeComponentComponent } from './awesome-component.component';

describe('AwesomeComponentComponent', () => {
  let component: AwesomeComponentComponent;
  let fixture: ComponentFixture<AwesomeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwesomeComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwesomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
