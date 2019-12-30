import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    fb: FormBuilder
    ) { 
      this.loginForm = fb.group({
        email: ["", Validators.required]
    });
    }

  ngOnInit() {
  
 
  }

}
