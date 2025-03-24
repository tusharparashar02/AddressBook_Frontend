import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  email = '';

  onSubmit() {
    console.log('Reset link sent to', this.email);
    alert('A password reset link has been sent to your email.');
  }
}
