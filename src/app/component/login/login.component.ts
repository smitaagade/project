import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm : FormGroup
  constructor(private formBuilder : FormBuilder) {  }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email : new FormControl('',[Validators.required]),

       Pass : new FormControl('',[Validators.required]),
    })

  }
get email(){
  return this.loginForm.get('email');
}
get pass(){
  return this.loginForm.get('pass');
}
} 
