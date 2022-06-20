import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './pages/home/home.component';
import {ProfileSidebarComponent} from './components/profile-sidebar/profile-sidebar.component';
import {FeedSidebarComponent} from './components/feed-sidebar/feed-sidebar.component';
import {PostListComponent} from './components/post-list/post-list.component';
import {NgIconsModule} from "@ng-icons/core";
import {
  BootstrapInfoSquareFill,
  BootstrapBookmarkFill,
  BootstrapCurrencyDollar,
  BootstrapImageFill,
  BootstrapPlayBtnFill,
  BootstrapCalendarDateFill,
  BootstrapBlockquoteLeft,
  BootstrapThreeDots
} from '@ng-icons/bootstrap-icons';

@NgModule({
  declarations: [
    HomeComponent,
    ProfileSidebarComponent,
    FeedSidebarComponent,
    PostListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgIconsModule.withIcons({
      BootstrapInfoSquareFill,
      BootstrapBookmarkFill,
      BootstrapCurrencyDollar,
      BootstrapImageFill,
      BootstrapPlayBtnFill,
      BootstrapCalendarDateFill,
      BootstrapBlockquoteLeft,
      BootstrapThreeDots
    })
  ]
})
export class HomeModule {
}
