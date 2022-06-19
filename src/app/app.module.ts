import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgIconsModule} from "@ng-icons/core";
import {
  BootstrapHouseDoorFill,
  BootstrapSearch,
  BootstrapInfoCircleFill,
  BootstrapBriefcaseFill,
  BootstrapChatRightDotsFill,
  BootstrapBellFill,
  BootstrapLinkedin
} from '@ng-icons/bootstrap-icons';
import {HeaderComponent} from './commons/components/header/header.component';
import {AkitaNgDevtools} from '@datorama/akita-ngdevtools';
import {environment} from '../environments/environment';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgIconsModule.withIcons({
      BootstrapHouseDoorFill,
      BootstrapSearch,
      BootstrapInfoCircleFill,
      BootstrapBriefcaseFill,
      BootstrapChatRightDotsFill,
      BootstrapBellFill,
      BootstrapLinkedin
    }),
    environment.production ? [] : AkitaNgDevtools.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
