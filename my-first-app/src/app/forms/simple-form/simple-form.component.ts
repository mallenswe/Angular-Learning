import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  @ViewChild('simpleForm', {static: true}) signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  constructor() { }

  ngOnInit() {
  }

  // onSubmit(simpleForm: NgForm) {
  //   console.log('submitted: ', simpleForm);
  // }

  onSubmit() {
    console.log(this.signupForm);
  }

}
