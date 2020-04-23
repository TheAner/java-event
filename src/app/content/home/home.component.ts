import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  countdown: TimerDate;

  constructor() { }

  ngOnInit(): void {
    this.countdown = this.getTimeRemaining(new Date('Apr 26, 2020'));
    this.initializeClock(new Date('Apr 26, 2020'));
  }

  initializeClock(endtime){
    const timeinterval = setInterval(() => {
      this.countdown = this.getTimeRemaining(endtime);
      if (this.countdown.total <= 0){
        clearInterval(timeinterval);
      }
    }, 1000);
  }

  getTimeRemaining(endtime): TimerDate{
    const t = Date.parse(endtime) - Date.parse(new Date().toString());
    const secondsN = Math.floor( (t / 1000) % 60 );
    const seconds = secondsN > 9 ? '' + secondsN : '0' + secondsN;
    const minutesN = Math.floor( (t / 1000 / 60) % 60 );
    const minutes = minutesN > 9 ? '' + minutesN : '0' + minutesN;
    const hoursN = Math.floor( (t / (1000 * 60 * 60)) % 24 );
    const hours = hoursN > 9 ? '' + hoursN : '0' + hoursN;
    const daysN = Math.floor( t / (1000 * 60 * 60 * 24) );
    const days = daysN > 9 ? '' + daysN : '0' + daysN;

    return {
      total: t,
      days,
      hours,
      minutes,
      seconds
    };
  }
}

interface TimerDate {
  total: number;
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}
