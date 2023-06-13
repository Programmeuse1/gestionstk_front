import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmdcltComponent } from './cmdclt.component';

describe('CmdcltComponent', () => {
  let component: CmdcltComponent;
  let fixture: ComponentFixture<CmdcltComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CmdcltComponent]
    });
    fixture = TestBed.createComponent(CmdcltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
