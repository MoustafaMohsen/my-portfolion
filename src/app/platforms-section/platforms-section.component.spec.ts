import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformsSectionComponent } from './platforms-section.component';

describe('PlatformsSectionComponent', () => {
  let component: PlatformsSectionComponent;
  let fixture: ComponentFixture<PlatformsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatformsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
