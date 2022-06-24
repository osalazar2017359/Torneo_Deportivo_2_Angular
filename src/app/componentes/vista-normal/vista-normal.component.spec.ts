import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaNormalComponent } from './vista-normal.component';

describe('VistaNormalComponent', () => {
  let component: VistaNormalComponent;
  let fixture: ComponentFixture<VistaNormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaNormalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
