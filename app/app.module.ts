import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { PopupComponent } from './popup.component';
import { MediaItemListComponent } from './media-item-list.component';
import { EmphasizeImageDirective } from './emphasize-image.directive';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    PopupComponent,
    MediaItemListComponent,
    EmphasizeImageDirective
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}