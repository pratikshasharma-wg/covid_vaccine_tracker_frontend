import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoseDetailComponent } from './dose-detail.component';

describe('DoseDetailComponent', () => {
  let component: DoseDetailComponent;
  let fixture: ComponentFixture<DoseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoseDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
