import { Component } from '@angular/core';
import md5 from 'md5';
/**
 * Twoim zadaniem jest napisać Gravatar.
 * Serwis przyjmuje url GRAVATAR_URL/MD5_HASH?s=DOUBLED_SIZE
 * Nie używaj zmiennych globalnych - wynieś USERS do serwisu
 */


const GRAVATAR_URL = 'http://gravatar.com/avatar';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Gravatars:
    </h1>
    <div>
      <ul>
        <li *ngFor="let user of USERS">
          <app-gravatar [email]="user.email" size="36"></app-gravatar> {{user.name}}
          <img [src]="url(user.email, size)" [width]="size" /> {{user.name}}
        </li>
      </ul>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
  USERS = [
    { id: 1, name: 'Krzysztof Kaczmarek', email: 'krzysztofkaczmarek@wingtsun.pl' },
    { id: 2, name: 'Rich Hickey', email: 'rich@cognitect.com' }
  ];

  size = 36;
  url(email: string, size: any): String {
    return `${GRAVATAR_URL}/${md5(email)}?s=${size * 2}`;
  }


}
