import { Component, OnInit } from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 // isLoading:boolean=false;
  user:any={
    username:'',
    email:'',
    password:''
  }
  loginForm:FormGroup = new FormGroup({
    name: new FormControl("",[Validators.required]) ,
    email:new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",[Validators.required])
  })

  constructor() { }
  setFormValues(){
    this.loginForm.patchValue({
      name:'ahmed',
      email:'ahmad@hotmail',
      password:'123'
    })
  }

  ngOnInit(): void {
  }
 /* login(){
    this.isLoading=true;

  }*/

}
