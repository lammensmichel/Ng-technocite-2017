import { UserService } from './../user.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Iuser } from '../types/IUser.interface';

@Component({
  selector: 'app-loginreactive-form',
  templateUrl: './loginreactive-form.component.html',
  styleUrls: ['./loginreactive-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginreactiveFormComponent implements OnInit {

  IsLogin: boolean;
  myForm: FormGroup;
  login: AbstractControl;
  password: AbstractControl;

  constructor(private userService: UserService, formBuilder: FormBuilder) {
    this.IsLogin = false;
    this.myForm = formBuilder.group(
      {
        'login':  ['', Validators.required],
       'password': ['', [Validators.required,
         Validators.maxLength(10), Validators.minLength(5)]]
      }
    );
    this.login = this.myForm.controls['login'];
    this.password = this.myForm.controls['password'];
  }
  onSubmit(value: Iuser) {
    this.IsLogin = this.userService.singInUser(value);
    return false;
  }

  ngOnInit() {
  }

}
