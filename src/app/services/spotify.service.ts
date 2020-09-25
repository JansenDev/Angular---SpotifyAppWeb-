import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {



  constructor(private http: HttpClient) {
  }



  getReleases() {
    // // !Forma 2
    // const headers = new HttpHeaders()
    //   .set('Authorization', 'Bearer BQAbKYn3r1XnGn_pcWAcmiln4ghZUM4aLtSrt1hUueYGYRw6xjZAJ728QXAETmXE46lC9HtYMRogmbG5cQw')

    // // !Forma 3
    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQAbKYn3r1XnGn_pcWAcmiln4ghZUM4aLtSrt1hUueYGYRw6xjZAJ728QXAETmXE46lC9HtYMRogmbG5cQw'
    // });

    // !Forma 1 
    const header = new HttpHeaders({
      'Authorization': 'Bearer BQC0odFOLbcf5IdxVAkWtDSxuqWIlve5OlwV_pONTnPoHeqfO_wyNfXExqLLtGlV49AEMVERjg2yAVBVUV8'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers: header });
  }

}
