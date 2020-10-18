import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CigaretteCartComponent } from './cigarette-cart.component';

describe('CigaretteCartComponent', () => {
  let component: CigaretteCartComponent;
  let fixture: ComponentFixture<CigaretteCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CigaretteCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CigaretteCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
