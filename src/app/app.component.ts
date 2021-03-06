import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Time Zone Display';
  timeText = '';
  tz = 0;
  showTime = function(offset) {
    this.tz = offset;
    if(offset === 0) {
      this.timeText = '';
    } else {
      this.timeText = moment().utcOffset(offset).format('lll');
    }
  }
}
