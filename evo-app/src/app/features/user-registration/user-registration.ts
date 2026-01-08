import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-registration.html',
  styleUrl: './user-registration.scss',
  standalone: true,
})
export class UserRegistrationComponent {
  form!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[A-Za-zÀ-ÿ\s]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get isFormFilled(): boolean {
    return this.name?.value && this.email?.value && this.password?.value;
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) return;

    localStorage.setItem('user', JSON.stringify(this.form.value));

    this.router.navigate(['/details']);
  }
}
