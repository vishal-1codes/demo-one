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
import { NgoneComponent } from './ngrx/ngone/ngone.component';
import { NgtwoComponent } from './ngrx/ngtwo/ngtwo.component';
import { NgthreeComponent } from './ngrx/ngthree/ngthree.component';
import { StoreModule } from '@ngrx/store';
import { couterReducer } from './state/couter.reducer';
@NgModule({
  declarations: [
    AppComponent,
    TwoComponent,
    ComoneComponent,
    ComtwoComponent,
    ComthreeComponent,
    NgoneComponent,
    NgtwoComponent,
    NgthreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    //we can add any name for key
    StoreModule.forRoot({counter:couterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
