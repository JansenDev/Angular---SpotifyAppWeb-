import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { ArtistComponent } from './components/artist/artist.component';



const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
