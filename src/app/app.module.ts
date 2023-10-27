import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwoComponent } from './two/two.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule , ReactiveFormsModule } from '@angular/forms';
import { ComoneComponent } from './components/comone/comone.component';
import { ComtwoComponent } from './components/comtwo/comtwo.component';
import { ComthreeComponent } from './components/comthree/comthree.component';

@NgModule({
  declarations: [
    AppComponent,
    TwoComponent,
    ComoneComponent,
    ComtwoComponent,
    ComthreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
