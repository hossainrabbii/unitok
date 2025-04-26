import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true,

  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactForm: FormGroup;
  successMessage: string | null = null;
  loading: boolean = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log('Form Submitted:', this.contactForm.value);
    if (this.contactForm.valid) {
      this.loading = true;
      this.successMessage = null;
      setTimeout(() => {
        this.successMessage = 'Your message has been sent successfully!';
        this.loading = false;
        this.contactForm.reset();
      }, 1000);
    } else {
      console.log('Form is invalid:', this.contactForm.errors);
    }
  }
}
