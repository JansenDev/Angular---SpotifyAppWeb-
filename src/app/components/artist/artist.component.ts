import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artist: any = {};
  loading: boolean;
  constructor(private activatedRoute: ActivatedRoute,
    private spotifyServices: SpotifyService) {
    this.loading = true;

    this.activatedRoute.params.subscribe(response =>
      this.getArtist(response['id'])
    );



  }


  getArtist(id: string) {
    this.loading = true;
    this.spotifyServices.getSearchArtist(id)
      .subscribe((response: any) => {
        this.artist = response;
        this.loading = false;
      });;

  }




  ngOnInit(): void {
  }

}
