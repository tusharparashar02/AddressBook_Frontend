import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.scss']
})
export class EditAddressComponent implements OnInit {
  address = { id: 0, fullName: '', email: '', phoneNumber: null, address: '' };

  constructor(private route: ActivatedRoute, private router: Router, private addressService: AddressService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) {
      alert("Invalid address ID.");
      this.router.navigate(['/address-list']); // Redirect if ID is missing
      return;
    }

    this.addressService.getAddressById(id).subscribe(
      (response) => {
        if (response && response.data) {
          this.address = response.data; // Adjust according to the backend response
        } else {
          alert("Address not found.");
          this.router.navigate(['/address-list']);
        }
      },
      (error) => {
        console.error("Error fetching address:", error);
        alert("Error fetching address.");
        this.router.navigate(['/address-list']);
      }
    );
  }

  onSubmit() {
    if (!this.address.id) {
      alert("Address ID is missing.");
      return;
    }

    this.addressService.updateAddress(this.address.id, this.address).subscribe(
      () => {
        alert('Address updated successfully!');
        this.router.navigate(['/address-list']);
      },
      (error) => {
        console.error("Error updating address:", error);
        alert('Error updating address: ' + error.message);
      }
    );
  }
}
