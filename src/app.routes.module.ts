import { EventsComponent } from './app/events/events.component';
import { DetailComponent } from './app/detail/detail.component';
import { AppComponent } from './app/app.component';
import { BkFormComponent } from './app/bk-form/bk-form.component';
import { Component } from '@angular/core';
import { ClientComponent } from './app/client/client.component';
import { Routes, RouterModule } from '@angular/router';

export const myRouter: Routes = [

    {path: '', component: BkFormComponent},
    {path: 'detail', component: DetailComponent, children:[
        {path: 'events', component: EventsComponent},
        {path: 'client', component: ClientComponent}
    ]}
    

];