import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {first} from "rxjs/operators"
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myform: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.myform = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  get f() {
    return this.myform.controls;
  }

  onSubmit() {
    this.authService.login(this.f.username.value, this.f.password.value).pipe(first()).subscribe(data => {
      console.log(data);
    })
  }

}
