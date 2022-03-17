import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeListItemComponent } from './theme-list-item/theme-list-item.component';
import { UserService } from './user.service';
import { ThemeService } from './theme.service';
import { PostService } from './post.service';
import { PostListItemComponent } from './post-list-item/post-list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    ThemeListComponent,
    ThemeListItemComponent,
    PostListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserService,ThemeService,PostService],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
]
})
export class AppModule { }
