import { Component } from '@angular/core';
/**
 * Twoim zadaniem jest napisać Gravatar.
 * Serwis przyjmuje url GRAVATAR_URL/MD5_HASH?s=DOUBLED_SIZE
 * Nie używaj zmiennych globalnych - wynieś USERS do serwisu
 */


const GRAVATAR_URL = 'http://gravatar.com/avatar';
const USERS = [
  { id: 1, name: 'Krzysztof Kaczmarek', email: 'krzysztofkaczmarek@wingtsun.pl' },
  { id: 2, name: 'Rich Hickey', email: 'rich@cognitect.com' }
];

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Gravatars:
    </h1>
    <div>
      <ul>
        <li *ngFor="let user of USERS">
          // gravatars should be here
        </li>
      </ul>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
