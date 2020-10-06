import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  releases: any[] = [];
  loading: boolean;
  error: boolean;
  message: string;
  constructor(private spotifyService: SpotifyService) {
    this.error = false;
    this.loading = true;
    this.getReleases();
  }

  getReleases() {
    this.spotifyService.getReleases()
      .subscribe((response: any) => {
        this.releases = response
        this.loading = false;
      }, (errorService: any) => {
        this.message = errorService.error.error.message;
        this.error = true;
        this.loading = false;
      });

  }



}
