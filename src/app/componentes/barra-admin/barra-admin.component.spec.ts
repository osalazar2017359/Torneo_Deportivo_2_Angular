import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraAdminComponent } from './barra-admin.component';

describe('BarraAdminComponent', () => {
  let component: BarraAdminComponent;
  let fixture: ComponentFixture<BarraAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
