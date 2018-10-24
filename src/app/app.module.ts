import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BkFormComponent } from './bk-form/bk-form.component';
import { FormsModule } from '@angular/forms';
import { ClientComponent } from './client/client.component';
import { Routes, RouterModule } from '@angular/router';
import { myRouter } from '../app.routes.module';
import { EventsComponent } from './events/events.component';
import { DetailComponent } from './detail/detail.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    BkFormComponent,
    ClientComponent,
    EventsComponent,
    DetailComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(myRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
