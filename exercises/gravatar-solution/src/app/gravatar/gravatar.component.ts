import {Component, Input, OnInit} from '@angular/core';
import md5 from 'md5';
@Component({
  selector: 'app-gravatar',
  template: `
    <img [src]="url(email, size)" [width]="size" />
  `,
  styles: []
})
export class GravatarComponent implements OnInit {

  @Input()
  email: String

  @Input()
  size: number

  GRAVATAR_URL = 'http://gravatar.com/avatar';

  constructor() { }

  ngOnInit() {
  }

  url(): String {
    return `${this.GRAVATAR_URL}/${md5(this.email)}?s=${this.size * 2}`;
  }

}
