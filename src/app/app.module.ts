import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IntroscreenComponent } from './introscreen/introscreen.component';
import { QuestionscreenComponent } from './questionscreen/questionscreen.component';
import { ResultscreenComponent } from './resultscreen/resultscreen.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroscreenComponent,
    QuestionscreenComponent,
    ResultscreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
	MatButtonModule,
	ReactiveFormsModule,
	HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
