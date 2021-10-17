import { Component, Input, OnInit } from '@angular/core';

import { music, Music } from '../music';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showFiller = false;
  music: Music[] = music;
  @Input() favourites?: Music[];
  styles = {
    display: 'flex',
    'align-items': 'center',
  };
  constructor() {}

  ngOnInit(): void {}
}
