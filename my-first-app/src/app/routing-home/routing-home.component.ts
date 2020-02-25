import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalAuthService } from '../local-auth.service';

@Component({
  selector: 'app-routing-home',
  templateUrl: './routing-home.component.html',
  styleUrls: ['./routing-home.component.css']
})
export class RoutingHomeComponent implements OnInit {

  constructor(private router: Router, private localAuthService: LocalAuthService) { }

  ngOnInit() {
  }

  onLoadServers(id: number) {
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'loading'});
  }

  onLogin() {
    this.localAuthService.login();
  }
  onLogout() {
    this.localAuthService.logout();
  }

}
