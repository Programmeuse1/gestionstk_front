import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCmfrsComponent } from './detail-cmfrs.component';

describe('DetailCmfrsComponent', () => {
  let component: DetailCmfrsComponent;
  let fixture: ComponentFixture<DetailCmfrsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailCmfrsComponent]
    });
    fixture = TestBed.createComponent(DetailCmfrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
