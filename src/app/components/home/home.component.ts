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

  constructor(private spotifyService: SpotifyService) {

    this.spotifyService.getReleases()
      .subscribe((response: any) => this.releases = response);
  }
}
