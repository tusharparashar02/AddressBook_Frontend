import { Component } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  newPassword = '';
  confirmPassword = '';

  onSubmit() {
    if (this.newPassword !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Password reset successfully');
    alert('Your password has been reset. You can now log in.');
  }
}
