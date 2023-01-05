import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavsComponent } from './sidenavs.component';

describe('SidenavsComponent', () => {
  let component: SidenavsComponent;
  let fixture: ComponentFixture<SidenavsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
