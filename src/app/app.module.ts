import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// *HttpsModule 
import { HttpClientModule } from '@angular/common/http';

// *Routes
import { AppRoutingModule } from './app-routing.module';
// *Components 
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { ArtistComponent } from './components/artist/artist.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavBarComponent,
    HomeComponent,
    ArtistComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
