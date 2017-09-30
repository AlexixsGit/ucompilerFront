import { StartComponent } from './start/start.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';

/**
 * Modulo que registra el enrutamiento de componentes en la aplicacion de angular
 * Este modulo debe ser importado en el modulo principal para que el enrutamiento funcione correctamente
 */


//Aqui van todos las rutas "Path" y los componentes "Component"
const routes: Routes = [
    { path: '', redirectTo: '/start', pathMatch: 'full' },
    { path: 'start', component: StartComponent },
    { path: 'users', component: UserComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
