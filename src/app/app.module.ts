import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { QueueComponent } from './core/components/queue/queue.component';
import { RowComponent } from './core/components/row/row.component';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent,
    QueueComponent,
    RowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
