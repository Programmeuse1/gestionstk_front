import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMvtstkComponent } from './detail-mvtstk.component';

describe('DetailMvtstkComponent', () => {
  let component: DetailMvtstkComponent;
  let fixture: ComponentFixture<DetailMvtstkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailMvtstkComponent]
    });
    fixture = TestBed.createComponent(DetailMvtstkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
