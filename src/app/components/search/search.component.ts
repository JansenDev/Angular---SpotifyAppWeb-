import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  artists: string;

  constructor(private spotifyService: SpotifyService) { }

  searchArtist(reference: string) {
    this.spotifyService.getSearchArtist(reference)
      .subscribe((response) => {
        this.artists = response;
        console.log(response);
      });
  }

  ngOnInit(): void {
  }

}
