import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingImageComponent } from './painting-image.component';

describe('PaintingImageComponent', () => {
  let component: PaintingImageComponent;
  let fixture: ComponentFixture<PaintingImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaintingImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaintingImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
