import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichProduitComponent } from './fich-produit.component';

describe('FichProduitComponent', () => {
  let component: FichProduitComponent;
  let fixture: ComponentFixture<FichProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
