import { UserService } from '../user.service';
import { Iuser } from './../types/IUser.interface';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

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

  ngOnInit() {
  }

  onSubmit(value: Iuser) {
    this.IsLogin = this.userService.singInUser(value);
    return false;
  }
}
