import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndivMomentComponent } from './indiv-moment.component';

describe('IndivMomentComponent', () => {
  let component: IndivMomentComponent;
  let fixture: ComponentFixture<IndivMomentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndivMomentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndivMomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
