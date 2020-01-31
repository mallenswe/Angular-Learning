import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-routing-home',
  templateUrl: './routing-home.component.html',
  styleUrls: ['./routing-home.component.css']
})
export class RoutingHomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onLoadServers(id: number) {
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'loading'});
  }

  onLogin() {
    this.authService.login();
  }
  onLogout() {
    this.authService.logout();
  }

}
