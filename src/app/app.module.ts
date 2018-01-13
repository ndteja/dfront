import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatMenuModule, MatButtonModule,MatIconModule,MatCardModule,MatToolbarModule} from '@angular/material' ;

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MenudemoComponent } from './menudemo/menudemo.component';


@NgModule({
  declarations: [
    AppComponent,
    MenudemoComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
