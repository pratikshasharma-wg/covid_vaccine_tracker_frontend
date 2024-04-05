import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyDoseDetailComponent } from './verify-dose-detail.component';

describe('VerifyDoseDetailComponent', () => {
  let component: VerifyDoseDetailComponent;
  let fixture: ComponentFixture<VerifyDoseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerifyDoseDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerifyDoseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
