import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TafSnackBarComponent } from './taf-snack-bar.component';

describe('TafSnackBarComponent', () => {
  let component: TafSnackBarComponent;
  let fixture: ComponentFixture<TafSnackBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TafSnackBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TafSnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
