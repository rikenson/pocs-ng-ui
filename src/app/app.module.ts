import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { ListItem } from './pages/entity/list-item/ListItem';
import { SidebarPrimary } from './component/sidebar-primary/sidebar.primary';
import { Header } from './component/header/header';
import { SidebarSecondary } from './component/sidebar-secondary/sidebar.secondary';
import { Footer } from './component/footer/footer';
import { Toolbar } from './component/toolbar/toolbar';
import { ItemDetails } from './pages/entity/item-details/ItemDetails';
import { ItemForm } from './pages/entity/item-form/ItemForm';

@NgModule({
  declarations: [
    App,
    ListItem,
    SidebarPrimary,
    Header,
    SidebarSecondary,
    Footer,
    Toolbar,
    ItemDetails,
    ItemForm
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
