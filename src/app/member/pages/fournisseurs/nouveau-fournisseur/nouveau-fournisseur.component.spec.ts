import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauFournisseurComponent } from './nouveau-fournisseur.component';

describe('NouveauFournisseurComponent', () => {
  let component: NouveauFournisseurComponent;
  let fixture: ComponentFixture<NouveauFournisseurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NouveauFournisseurComponent]
    });
    fixture = TestBed.createComponent(NouveauFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
