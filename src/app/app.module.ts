import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CigaretteListComponent } from './cigarette-list/cigarette-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CigaretteListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
