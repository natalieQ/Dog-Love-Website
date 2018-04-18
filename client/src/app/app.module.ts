import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { DogService } from './services/dog.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DogProfileComponent } from './components/dog-profile/dog-profile.component';
import { DogLoveComponent } from './components/dog-love/dog-love.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DogProfileComponent,
    DogLoveComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FlashMessagesModule
  ],
  providers: [FlashMessagesService,DogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
