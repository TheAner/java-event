import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {SpeakersComponent} from './speakers/speakers.component';
import {VenueComponent} from './venue/venue.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import {RegisterComponent} from './register/register.component';
import {RouterModule} from '@angular/router';
import {QuizComponent} from './home/quiz/quiz.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [HomeComponent, SpeakersComponent, VenueComponent, ScheduleComponent, RegisterComponent, QuizComponent],
  exports: [
    QuizComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule,
    FormsModule
  ]
})
export class ContentModule {
}
