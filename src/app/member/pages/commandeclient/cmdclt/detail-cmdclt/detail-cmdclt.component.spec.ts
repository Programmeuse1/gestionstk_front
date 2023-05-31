import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCmdcltComponent } from './detail-cmdclt.component';

describe('DetailCmdcltComponent', () => {
  let component: DetailCmdcltComponent;
  let fixture: ComponentFixture<DetailCmdcltComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailCmdcltComponent]
    });
    fixture = TestBed.createComponent(DetailCmdcltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
