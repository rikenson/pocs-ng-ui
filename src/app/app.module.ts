import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { EntityListComponent } from './pages/entity-list/entity-list.component';
import { SidebarPrimary } from './component/sidebar-primary/sidebar.primary';
import { Header } from './component/header/header';
import { SidebarSecondary } from './component/sidebar-secondary/sidebar.secondary';
import { Footer } from './component/footer/footer';
import { Toolbar } from './component/toolbar/toolbar';

@NgModule({
  declarations: [
    App,
    EntityListComponent,
    SidebarPrimary,
    Header,
    SidebarSecondary,
    Footer,
    Toolbar
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
