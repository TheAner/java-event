import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { VenueComponent } from './venue/venue.component';
import { ScheduleComponent } from './schedule/schedule.component';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [HomeComponent, SpeakersComponent, VenueComponent, ScheduleComponent, RegisterComponent],
  imports: [
    CommonModule,
    ButtonsModule.forRoot()
  ]
})
export class ContentModule { }
