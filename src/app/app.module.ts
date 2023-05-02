import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { HomeComponent } from './core/components/home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RequestModule } from './core/modules/request/request.module';
import { QueueModule } from './core/modules/queue/queue.module';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent,
    HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RequestModule,
    QueueModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
