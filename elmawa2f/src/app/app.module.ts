import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    BrowserModule,
   
  
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDlQVuRbWSzUzxR0sd-S9a7KoW-_WyFEec'
    })
  ],
  providers: [],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}