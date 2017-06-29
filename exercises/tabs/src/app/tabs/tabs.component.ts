import {Component, OnInit} from '@angular/core';


// - spraw aby po kliknieciu na tab zmieniala sie zawartosc i podswietlenie

@Component({
  selector: 'app-tabs',
  template: `
      <div>
        <div class='tab' 
          *ngFor="let item of data">
          {{item.name}}
        </div>
      </div>
      <div class='tabPannels'>
        <div>
          {{currentItem.description}}
        </div>
      </div>
    
  `,
  styles: [`
    .tab {
      display: inline-block;
      padding: 10px;
      margin: 10px;
      border-bottom: 4px solid;
      cursor: pointer;
      border-bottom-color: #ccc;

    }

    .activeTab {
      display: inline-block;
      padding: 10px;
      margin: 10px;
      border-bottom: 4px solid;
      cursor: pointer;
      border-bottom-color: #000;
    }

    .tabPannels {
      padding: 10px;
    }

  `]
})
export class TabsComponent implements OnInit {
  data = [
    {name: 'Lisp', description: 'Code is data'},
    {name: 'Haskell', description: 'Data is code'},
    {name: 'Ruby', description: 'Strings are code'},
    {name: 'JavaScript', description: 'Undefined is not a function'},
  ];
  currentItem = this.data[0];

  constructor() {
  }

  ngOnInit() {
  }

}
