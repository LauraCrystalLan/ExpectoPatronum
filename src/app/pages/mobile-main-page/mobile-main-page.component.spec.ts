import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMainPageComponent } from './mobile-main-page.component';

describe('MobileMainPageComponent', () => {
  let component: MobileMainPageComponent;
  let fixture: ComponentFixture<MobileMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileMainPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
