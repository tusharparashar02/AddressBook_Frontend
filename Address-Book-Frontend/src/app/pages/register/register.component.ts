import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.errorMessage = 'Please fill all fields correctly!';
      return;
    }

    this.authService.register(this.registerForm.value).subscribe({
      next: (response) => {
        console.log('Registration Success:', response);
        this.successMessage = 'Registration successful! Redirecting to login...';
       this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Registration Error:', err);
        this.errorMessage = err.error?.message || 'Registration failed!';
      }
    });
  }
}
