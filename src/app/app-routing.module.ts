import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeCompoenent } from './components/home/home.component';
import { RecepieComponent } from './components/recepie/recepie.component';
import { RecepieAddComponent } from './components/recepie/recepie-add/recepie-add.component';

const routes: Routes = [
    { path: 'home', component: HomeCompoenent },
    { path: 'recepie', component: RecepieComponent },
    { path: 'recepie/:id', component: RecepieAddComponent },
    {path: '', redirectTo: 'home', pathMatch: 'full' }
];

const config: ExtraOptions = {
    useHash: true,
};

@NgModule({
    imports: [RouterModule.forRoot(routes)],  
    exports: [RouterModule]
})
export class AppRoutingModule {

}