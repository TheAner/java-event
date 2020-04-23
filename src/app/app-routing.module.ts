import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './content/home/home.component';
import {SpeakersComponent} from './content/speakers/speakers.component';
import {VenueComponent} from './content/venue/venue.component';
import {ScheduleComponent} from './content/schedule/schedule.component';
import {RegisterComponent} from './content/register/register.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'speakers', component: SpeakersComponent},
  {path: 'venue', component: VenueComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
