import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  firstName= ""
  lastName=''
  email=''
  blankSpace=''

  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    this.blankSpace = 'Hello, ' + this.firstName + " " + this.lastName  + "your email " + this.email + "has been added";
  }

}
