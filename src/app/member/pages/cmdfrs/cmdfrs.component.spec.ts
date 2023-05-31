import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmdfrsComponent } from './cmdfrs.component';

describe('CmdfrsComponent', () => {
  let component: CmdfrsComponent;
  let fixture: ComponentFixture<CmdfrsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CmdfrsComponent]
    });
    fixture = TestBed.createComponent(CmdfrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
