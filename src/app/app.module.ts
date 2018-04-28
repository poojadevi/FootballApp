import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLinkActive } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { DatashareService } from './datashare.service';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CompetitionScreenComponent } from './competition-screen/competition-screen.component';
import { TeamscreenComponent } from './teamscreen/teamscreen.component';


@NgModule({
  declarations: [
    AppComponent,
    CompetitionScreenComponent,
    TeamscreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
	HttpClientModule
  ],
  providers: [DatashareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
