import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {

  artist: any = {};
  loading: boolean;
  idArtist: string;
  topTracks: any = [];

  constructor(private activatedRoute: ActivatedRoute,
    private spotifyServices: SpotifyService) {
    this.loading = true;

    this.activatedRoute.params.subscribe(response =>
      this.idArtist = response['id']
    );

    this.getArtist(this.idArtist);
    this.getTopTracks(this.idArtist);


  }

  getArtist(id: string) {
    this.loading = true;
    this.spotifyServices.getSearchArtist(id)
      .subscribe((response: any) => {
        this.artist = response;
        this.loading = false;
      });;

  }

  getTopTracks(id: string) {

    this.spotifyServices.getTopTracks(id)
      .subscribe((dataTopTracks: any) => {
        this.topTracks = dataTopTracks;
      });

  }



}
