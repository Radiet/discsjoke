import { Component, Input } from '@angular/core';

import { PlaylistItem } from '../model/playlist-item'

@Component({
  selector: 'playlist-item',
  templateUrl: 'app/dj/playlist-item.component.html',
  styleUrls: ['app/dj/playlist-item.component.css'],
})
export class PlaylistItemComponent {

  @Input() item: PlaylistItem;

}
