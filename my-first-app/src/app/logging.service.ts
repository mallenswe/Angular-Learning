import { Injectable } from '@angular/core';

// @Injectable({providedIn: 'root'})

export class LoggingService {
    lastlog: string;

    printLog(message: string) {
        console.log('printLog lastlog: ', this.lastlog);
        console.log('printLog message: ', message);
        this.lastlog = message;
    }
}