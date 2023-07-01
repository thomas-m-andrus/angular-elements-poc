import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAwesomeComponentComponent } from './child-awesome-component.component';

describe('ChildAwesomeComponentComponent', () => {
  let component: ChildAwesomeComponentComponent;
  let fixture: ComponentFixture<ChildAwesomeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildAwesomeComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildAwesomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
