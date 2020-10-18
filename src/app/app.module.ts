import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CigaretteListComponent } from './cigarette-list/cigarette-list.component';
import { CigaretteAboutComponent } from './cigarette-about/cigarette-about.component';
import { CigarettesComponent } from './cigarettes/cigarettes.component';
import { CigaretteCartComponent } from './cigarette-cart/cigarette-cart.component';
import { appRoutes } from './app-routes';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    CigaretteListComponent,
    CigaretteAboutComponent,
    CigarettesComponent,
    CigaretteCartComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
