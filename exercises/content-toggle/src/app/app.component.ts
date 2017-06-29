import { Component } from '@angular/core';

/**
 * 1. napisz content toggle
 * masz już gotowe style =)
 *   <ContentToggle summary="Jerk Chicken">
 *    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
 *   </ContentToggle>
 * 2. później ;)
 */


@Component({
  selector: 'app-root',
  template: `
    <h1>
      Welcome to {{title}}!!
    </h1>
      <div class="ContentToggle">
        <div class="ContentToggle__Summary ContentToggle__Summary--open">
          Some content
        </div>

        <div>
          Another content
        </div>
      </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'Ailleron Content Toggle';
}
