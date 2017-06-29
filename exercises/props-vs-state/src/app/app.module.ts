import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ContentToggleComponent } from './content-toggle/content-toggle.component';
import { ContentToggleContainerComponent } from './content-toggle/content-toggle-container';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ContentToggleComponent,
    ContentToggleContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
