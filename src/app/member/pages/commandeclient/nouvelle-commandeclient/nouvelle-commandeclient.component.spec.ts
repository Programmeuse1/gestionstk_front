import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleCommandeclientComponent } from './nouvelle-commandeclient.component';

describe('NouvelleCommandeclientComponent', () => {
  let component: NouvelleCommandeclientComponent;
  let fixture: ComponentFixture<NouvelleCommandeclientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NouvelleCommandeclientComponent]
    });
    fixture = TestBed.createComponent(NouvelleCommandeclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
