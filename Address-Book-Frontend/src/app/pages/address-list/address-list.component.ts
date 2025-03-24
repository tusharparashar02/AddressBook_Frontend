import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss']
})
export class AddressListComponent implements OnInit {
  addresses: any[] = [];

  constructor(private router: Router, private addressService: AddressService) {}

  ngOnInit() {
    this.loadAddresses();
  }

  loadAddresses() {
    this.addressService.getAllAddresses().subscribe({
      next: (response) => {
        console.log("API Response:", response); // Debugging

        if (response && Array.isArray(response.data)) {
          this.addresses = response.data; 
        } else {
          this.addresses = []; 
        }
      },
      error: (err) => {
        console.error("Error fetching addresses:", err);
        this.addresses = []; 
      }
    });
  }

  navigateToAddAddress() {
    this.router.navigate(['/add-address']);
  }

  editAddress(id: number) {
    this.router.navigate(['/edit-address', id]);
  }

  deleteAddress(id: number) {
    if (confirm('Are you sure you want to delete this address?')) {
      this.addressService.deleteAddress(id).subscribe(() => {
        this.addresses = this.addresses.filter(address => address.id !== id);
      });
    }
  }
}
