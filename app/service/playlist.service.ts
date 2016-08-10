import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { PlaylistItem } from '../model/playlist-item';

@Injectable()
export class PlaylistService {

  private indexVideoUrl = 'http://discjoke.herokuapp.com/api/channels/webdev';

  constructor(private http: Http) { }

  getVideos() {
    return this.http.get(this.indexVideoUrl)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }


  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
