import { Component } from '@angular/core';
import Parse from 'parse';
import { environment } from '../environments/environment';


@Component({
   selector: 'app-root',
   templateUrl: 'app.component.html',
   styleUrls: ['app.component.scss'],
})
export class AppComponent {
   constructor() {
      Parse.initialize(environment.APP_ID, environment.JS_KEY);
      Parse.serverURL = 'https://parseapi.back4app.com';
   }
}
