import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing-user',
  templateUrl: './routing-user.component.html',
  styleUrls: ['./routing-user.component.css']
})
export class RoutingUserComponent implements OnInit {
  user: { id: number, name: string };
  constructor() { }

  ngOnInit() {
  }

}
