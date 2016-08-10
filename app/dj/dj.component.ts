import { Component, OnInit } from '@angular/core';

import { PlaylistComponent } from './playlist.component';
import { PlaylistService } from '../service/playlist.service';
import { PlaylistItem } from '../model/playlist-item'

@Component({
  selector: 'page-dj',
  templateUrl: 'app/dj/dj.component.html',
  directives: [PlaylistComponent],
  providers: [PlaylistService]
})
export class DjComponent implements OnInit {

  Channel: {}

  constructor(
    private playlistService: PlaylistService) { }

  getVideos() {
    this.playlistService.getVideos().then( response => this.Channel = response );
  }

  ngOnInit() {
    this.getVideos();
  }

}
