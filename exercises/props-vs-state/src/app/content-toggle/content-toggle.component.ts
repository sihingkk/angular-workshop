import {Component, Input, OnInit, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-content-toggle',
  template: `
    <div class="ContentToggle">
      <div
        (click)="toggle(details)"
        [ngClass]="'ContentToggle__Summary' + (showDetails ? ' ContentToggle__Summary--open' : '')">
        {{summary}}
      </div>
      <div *ngIf="showDetails" #details>
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: []
})
export class ContentToggleComponent implements OnInit {

  @Input()
  summary: String;

  showDetails = true;

  constructor() { }

  toggle(details) {
    this.showDetails = !this.showDetails;
  }

  ngOnInit() {

  }

}
