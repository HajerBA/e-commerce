import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { FichProduitComponent } from "./fich-produit/fich-produit.component";
import { ProduitListComponent } from './produit-list/produit-list.component';

const routes: Routes = [
  { path: '', component: ProduitListComponent },
  { path: 'fichprod', component: FichProduitComponent },
  
  
]


@NgModule({
  exports: [ RouterModule ],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  declarations: []
})

export class AppRoutingModule { }
