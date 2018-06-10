import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchWeatherComponent } from './weather/search-weather/search-weather.component';
import { ViewWeatherComponent } from './weather/view-weather/view-weather.component';

const routes: Routes = [
    {path: 'home', component: SearchWeatherComponent},
    {path: 'weather/:city', component: ViewWeatherComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents = [SearchWeatherComponent, ViewWeatherComponent];

