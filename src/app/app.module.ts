import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { CardComponent } from './card/card.component';
import { NadaComponent } from './nada/nada.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SlidebarComponent,
    CardComponent,
    NadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
