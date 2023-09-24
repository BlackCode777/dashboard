import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocDashboardComponent } from './poc-dashboard.component';

describe('PocDashboardComponent', () => {
  let component: PocDashboardComponent;
  let fixture: ComponentFixture<PocDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PocDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PocDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
