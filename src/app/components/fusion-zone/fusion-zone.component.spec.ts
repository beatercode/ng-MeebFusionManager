import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FusionZoneComponent } from './fusion-zone.component';

describe('FusionZoneComponent', () => {
  let component: FusionZoneComponent;
  let fixture: ComponentFixture<FusionZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FusionZoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FusionZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
