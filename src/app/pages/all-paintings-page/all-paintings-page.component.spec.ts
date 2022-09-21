import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPaintingsPageComponent } from './all-paintings-page.component';

describe('AllPaintingsPageComponent', () => {
  let component: AllPaintingsPageComponent;
  let fixture: ComponentFixture<AllPaintingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPaintingsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPaintingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
