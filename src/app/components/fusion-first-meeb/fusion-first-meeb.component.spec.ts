import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FusionFirstMeebComponent } from './fusion-first-meeb.component';

describe('FusionFirstMeebComponent', () => {
  let component: FusionFirstMeebComponent;
  let fixture: ComponentFixture<FusionFirstMeebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FusionFirstMeebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FusionFirstMeebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
