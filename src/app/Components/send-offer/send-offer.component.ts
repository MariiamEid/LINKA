import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-send-offer',
  templateUrl: './send-offer.component.html',
  styleUrl: './send-offer.component.css'
})
export class SendOfferComponent {
  userForm: any;
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      image: ['', Validators.required],
      price: ['', Validators.required],
      profitrate: ['', Validators.required],
      description: ['', Validators.required],
      nationalid: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.userForm.valid) {
      // Form is valid, handle submission
      console.log(this.userForm.value);
      // You can send this data to your backend or perform other actions
    } else {
      // Form is invalid, show error messages
    }
  }


}

