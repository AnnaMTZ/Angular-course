// First of all, a component simply is just a class, a TypeScript class, so that Angular is able 
// to instantiate it to create objects based on the blueprint we set up here you could say.
// Decorators are ts features which help you to enhance your classes or elements in your code

import { Component } from "@angular/core"; /// to import a @Component decorator

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = "offline";
  getServerStatus() {
    return this.serverStatus;
  }
}