import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatMenuModule, MatButtonModule,MatIconModule,MatCardModule} from '@angular/material' ;


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
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
