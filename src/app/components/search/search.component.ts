import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  artists: string;
  loading: boolean = false;
  message: string;
  error: boolean;
  constructor(private spotifyService: SpotifyService) {
    this.error = false;
  }

  searchArtist(reference: string) {
    if (reference.length > 0) {
      this.loading = true;
      this.spotifyService.getSearchArtists(reference)
        .subscribe((response) => {
          this.artists = response;
          this.loading = false;

        }, (errorService: any) => {
          this.loading = false;
          this.error = true;
          this.message = errorService.error.error.message;
        });
    }

  }



  ngOnInit(): void {
  }

}
