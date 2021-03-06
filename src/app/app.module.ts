import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfilComponent } from './profil/profil.component';
import {FormsModule} from'@angular/forms';
import { TableauComponent } from './tableau/tableau.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent,
    TableauComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
