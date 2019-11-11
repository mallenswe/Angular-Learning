import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  userName = '';
  serverCreated = false;
  serversList = ['Test Server', 'Another One'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    // this.serverCreationStatus = 'Server was created... Name is ' + this.serverName + ' by ' + this.serversList[this.serversList.length - 1];
    this.serversList.push(this.serverName);
    console.log('serversList: ', this.serversList);
    this.serverCreated = true;
    this.userName = '';
    this.serverName = '';
  }

  // onUpdateServerName(event: any) {
  //   this.serverName = event.target.value;
  // }
}
