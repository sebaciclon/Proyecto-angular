import { Routes } from '@angular/router';
import { CigaretteAboutComponent } from './cigarette-about/cigarette-about.component';
import { CigarettesComponent } from './cigarettes/cigarettes.component';


export const appRoutes : Routes = [
    {
        path: '',
        redirectTo: 'cigarettes',
        pathMatch: 'full'
    },
    {
        path: 'cigarettes',
        component: CigarettesComponent
    },
    {        
        path: 'about',
        component: CigaretteAboutComponent
    },
];


