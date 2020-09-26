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
      'Authorization': 'Bearer BQDZBnq8Iw1xNY5Qq1DXYi8B29Knof9xMgQz1xwgemwZHuv41LHcPbUSQ_N9el-OQyGzneVE_sxPvo--crs'
    });
    return this.http.get(URL, { headers });
  }

  getReleases() {
    // // !Forma 2
    // const headers = new HttpHeaders()
    //   .set('Authorization', 'Bearer BQAbKYn3r1XnGn_pcWAcmiln4ghZUM4aLtSrt1hUueYGYRw6xjZAJ728QXAETmXE46lC9HtYMRogmbG5cQw')

    // // !Forma 3
    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQAbKYn3r1XnGn_pcWAcmiln4ghZUM4aLtSrt1hUueYGYRw6xjZAJ728QXAETmXE46lC9HtYMRogmbG5cQw'
    // });

    // // !Forma 1 
    // const header = new HttpHeaders({
    //   'Authorization': 'Bearer BQBe-AXelQTSMUSGuCChXsGRY_4yNNGc9XjPeJlr_-hPDrKJeRihobOWL8ZXZJFVfKNGkH0CgEeOpLWLFdU'
    // });

    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map(val => val['albums'].items));
  }

  getSearchArtists(reference: string) {
    // console.log(this.getQuery('search?q=${reference}&type=artist&limit=15')
    //   .pipe(map(data => data['artists'].items)).subscribe((data) => {
    //     console.log(data);
    //   }));
    return this.getQuery(`search?q=${reference}&type=artist&limit=15`)
      .pipe(map(data => data['artists'].items));
  }

  getSearchArtist(id: string) {
    //  let retornar = this.getQuery(`artists/&{id}`;
    // console.log(this.getQuery(`artists/&{id}`));
    return this.getQuery(`artists/${id}`);
    // return retornar;
  }

}
