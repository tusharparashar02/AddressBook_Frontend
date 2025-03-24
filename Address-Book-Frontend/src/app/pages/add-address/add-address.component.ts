import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss']
})
export class AddAddressComponent {
  address = { fullName: '', email: '', phoneNumber: null, address: '' };

  constructor(private router: Router, private addressService: AddressService) {}

  onSubmit() {
    this.addressService.addAddress(this.address).subscribe({
      next: () => {
        alert('Address added successfully!');
        this.router.navigate(['/address-list']);
      },
      error: (err) => {
        alert('Error adding address: ' + err.message);
      }
    });
  }
}
