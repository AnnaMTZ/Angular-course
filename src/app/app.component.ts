import { Component } from '@angular/core';

@Component({
  selector: 'app-root', ///should be unique
  // selector: '[app-root]',
  // selector: 'app-servers',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    h3 {
      color: pink;
    }
    `]
})
export class AppComponent {

}
