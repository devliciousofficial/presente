import { Component } from '@angular/core';
import Parse from 'parse'
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
   Parse.initialize('3auUTevR9wvgsYWt0BqYoQUHQV8Uz634k48WGhIk','aB1zPk1OjreFfXAzU1ECz86lJ0u8wqiQPcMpVE2D');
   Parse.serverURL = 'https://parseapi.back4app.com';
  }
}
