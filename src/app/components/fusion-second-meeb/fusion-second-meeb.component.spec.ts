import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FusionSecondMeebComponent } from './fusion-second-meeb.component';

describe('FusionSecondMeebComponent', () => {
  let component: FusionSecondMeebComponent;
  let fixture: ComponentFixture<FusionSecondMeebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FusionSecondMeebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FusionSecondMeebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
