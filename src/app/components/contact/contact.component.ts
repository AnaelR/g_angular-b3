import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup
  static readonly EMAIL = /^.+\@\S+\.\S+$/
  validForm: boolean = false
  sendForm: boolean = false

  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.pattern(ContactComponent.EMAIL)]),
      subject: new FormControl(null, [Validators.required]),
      comments: new FormControl(null, [Validators.required]),
    })
  }

  submitForm(): void {

    if (this.contactForm.invalid) {
      this.validForm = true
    } else {
      this.sendForm = true
    }
  }

  resetForm(): void{
    this.sendForm = false
    this.contactForm.reset()
  }

  ngOnInit(): void {
  }

}
