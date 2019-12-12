import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-main-account',
  templateUrl: './main-account.component.html',
  styleUrls: ['./main-account.component.css']
})
export class MainAccountComponent implements OnInit {
  accounts: {name: string, status: string}[] = [];

  constructor(private accountsService: AccountsService) {

  }

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }

  emitColorChange(color) {
    this.accountsService.colorChanged.emit(color);
  }

  // onAccountAdded(newAccount: {name: string, status: string}) {
  //   this.accounts.push(newAccount);
  // }

  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   this.accounts[updateInfo.id].status = updateInfo.newStatus;
  // }

}
