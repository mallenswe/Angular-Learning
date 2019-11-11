import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: #155724;
        }
    `]
})
export class ServerComponent {
    serverID:number = 10;
    serverStatus:string = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }
    getColor() {
        return this.serverStatus === 'online' ? '#d4edda' : '#fff3cd';
    }
}