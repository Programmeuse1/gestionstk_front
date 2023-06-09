import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleEntrepriseComponent } from './nouvelle-entreprise.component';

describe('NouvelleEntrepriseComponent', () => {
  let component: NouvelleEntrepriseComponent;
  let fixture: ComponentFixture<NouvelleEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleEntrepriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvelleEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
