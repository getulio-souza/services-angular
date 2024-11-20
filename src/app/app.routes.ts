import { Routes } from '@angular/router';
import { CursosComponent } from './component/cursos/cursos.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: 'cursos', component: CursosComponent},
    {path: '', component: AppComponent},
];
