import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup  =new FormGroup({
    name: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required,Validators.email]),
    subject: new FormControl('',[
      Validators.required,
      Validators.maxLength(50),
    ]),
    message: new FormControl('',[Validators.required])
  });
  constructor() { }

  sendMessage(){
    console.log(this.contactForm.value);
  }

  setFormValues(){
    this.contactForm.patchValue({
      name:'ahmed',
      subject:'sub',
      email:'ahmed@hotmail.com',
      message:'message',
    });
  }

  ngOnInit(): void {
  }




}
