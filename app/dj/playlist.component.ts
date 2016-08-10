import { Component, Input } from '@angular/core';

import { PlaylistItemComponent } from './playlist-item.component';
import { PlaylistItem } from '../model/playlist-item'

@Component({
  selector: 'dj-playlist',
  templateUrl: 'app/dj/playlist.component.html',
  directives: [PlaylistItemComponent]
})
export class PlaylistComponent {

  @Input() playlist: PlaylistItem[]
}
