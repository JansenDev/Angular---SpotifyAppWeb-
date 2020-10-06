import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  getQuery(query: string) {

    const URL = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDq6m9bnV4dVWTycI49C60sjx8bUIs9jAiuRXlFu4ipvMKHMyJzwix8sLC8qMU4DzhU_TxI0SpkyKP01Yk'
    });
    return this.http.get(URL, { headers });
  }

  getReleases() {
    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map(val => val['albums'].items));
  }

  getSearchArtists(reference: string) {
    return this.getQuery(`search?q=${reference}&type=artist&limit=15`)
      .pipe(map(data => data['artists'].items));
  }


  getSearchArtist(id: string) {
    return this.getQuery(`artists/${id}`);

  }

  getTopTracks(id: string) {

    return this.getQuery(`artists/${id}/top-tracks?market=US`)
      .pipe(map(data => data['tracks']));
  }

}
