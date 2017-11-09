import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Iuser } from '../types/IUser.interface';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginformComponent implements OnInit {

  constructor() { }

  submitForm(form: Iuser): boolean {
    console.log(form);
    return false;
  }

  ngOnInit() {
  }

}

