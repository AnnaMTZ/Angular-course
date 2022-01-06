import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: 'servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  // :datatype - typescript
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'testserver';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000) 
   }

  ngOnInit(): void {
  }
  onCreateServer() {
    this.serverCreationStatus = 'Server was created. Name is ' + this.serverName;
  }
  onUpdateServerName(event: Event) {
    // to make in work with ts we add <HTMLInputElement>
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
