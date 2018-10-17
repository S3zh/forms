import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CustomControlComponent } from './custom-control/custom-control.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {MatInputModule} from '@angular/material/input';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule, MatIconModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CustomControlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    MatInputModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
