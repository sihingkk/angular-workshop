import {Component, Input, OnInit, ViewChildren} from '@angular/core';

// dodaj przycisk toggleAll, ktory będzie przełączał stan wszystkich content-toggle

@Component({
  selector: 'app-content-toggle-container',
  template: `
    <app-content-toggle [summary]="'Pizza'">
      is awesome
    </app-content-toggle>
    <app-content-toggle [summary]="'Hamburger'">
      is awesome too!
    </app-content-toggle>
  `,
  styles: []
})
export class ContentToggleContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
