import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
export interface Contact {
  file: string;
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})

export class ContactPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
  click() {
    return;
  }
  Contact: Contact[] = [
    {
      file: 'Img_12.jpeg',
      name: ' Jamshshd Lin',
      updated: new Date('2/20/16'),
    },
    {
      file: 'Img_13.jpeg',
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      file: 'Img_14.jpeg',
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];
}
