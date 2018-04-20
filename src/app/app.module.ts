import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatInputModule} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatCardModule} from '@angular/material/card';
import { FichProduitComponent } from './fich-produit/fich-produit.component';
import { PanierComponent } from './panier/panier.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogOverviewExampleComponent } from './dialog-overview-example/dialog-overview-example.component';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    ProduitListComponent,
    HeaderComponent,
    FooterComponent,
    FichProduitComponent,
    PanierComponent,
    DialogOverviewExampleComponent,
    DialogOverviewExampleDialogComponent
  ],
  imports: [
    BrowserModule,MatButtonModule, MatCheckboxModule,
    FormsModule,MatInputModule,MatFormFieldModule,MatToolbarModule,MatIconModule,
    MatMenuModule,BrowserAnimationsModule,MatCardModule,MatDialogModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
