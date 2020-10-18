import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CigaretteAboutComponent } from './cigarette-about.component';

describe('CigaretteAboutComponent', () => {
  let component: CigaretteAboutComponent;
  let fixture: ComponentFixture<CigaretteAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CigaretteAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CigaretteAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
