import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss']
})
export class AddressListComponent {
  addresses = [
    { id: 1, name: 'Home', street: '123 Main St', city: 'New York', state: 'NY', imageUrl: 'https://via.placeholder.com/300' },
    { id: 2, name: 'Office', street: '456 Elm St', city: 'San Francisco', state: 'CA', imageUrl: 'https://via.placeholder.com/300' }
  ];

  constructor(private router: Router) {}

  navigateToAddAddress() {
    this.router.navigate(['/add-address']);
  }

  editAddress(id: number) {
    console.log('Edit Address', id);
    this.router.navigate(['/edit-address', id]);
  }

  deleteAddress(id: number) {
    this.addresses = this.addresses.filter(address => address.id !== id);
    console.log('Deleted Address', id);
  }
}
