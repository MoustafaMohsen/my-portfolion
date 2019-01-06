import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGlareComponent } from './image-glare.component';

describe('ImageGlareComponent', () => {
  let component: ImageGlareComponent;
  let fixture: ComponentFixture<ImageGlareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageGlareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageGlareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
