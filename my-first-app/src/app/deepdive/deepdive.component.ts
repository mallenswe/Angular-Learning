import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deepdive',
  templateUrl: './deepdive.component.html',
  styleUrls: ['./deepdive.component.css']
})
export class DeepdiveComponent {
  serverElements = [{type: 'server', name: 'Test Server', content: 'Some Content'}];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {blueprintName: string, blueprintContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.blueprintName,
      content: blueprintData.blueprintContent
    });

  }
}
