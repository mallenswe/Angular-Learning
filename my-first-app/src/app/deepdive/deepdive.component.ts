import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deepdive',
  templateUrl: './deepdive.component.html',
  styleUrls: ['./deepdive.component.css']
})
export class DeepdiveComponent {
  serverElements = [];
  newServerName = '';
  newServerContent = '';

  onAddServer() {
    this.serverElements.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    });
  }
}
