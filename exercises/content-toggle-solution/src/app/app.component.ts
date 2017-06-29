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
    <app-contenttoggle summary="Jerk Chicken">
      <p>Lorem ipsum dolor sit amet, consectetur</p>
    </app-contenttoggle>
  `,
  styles: []
})
export class AppComponent {
  title = 'Ailleron Content Toggle';
}
