import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-account-status',
  templateUrl: './account-status.component.html',
  styleUrls: ['./account-status.component.css']
})
export class AccountStatusComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;

  backgroundColor = 'white';

  constructor(private loggingService: LoggingService, private accountsService: AccountsService) {
    this.accountsService.colorChanged.subscribe((color: string) => {
      this.backgroundColor = color;
    });
  }


  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
    this.accountsService.statusUpdated.emit(status);
  }
}
