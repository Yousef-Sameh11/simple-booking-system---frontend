import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../services/booking.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent implements OnInit {

  resourceList: any = [];

  // Inject the BookingService correctly
  constructor(private bookingService: BookingService,private router:Router) { }

  ngOnInit(): void {
    this.getAllResources();
  }

  getAllResources(): void {
    this.bookingService.getAllResources().subscribe(
      (res: any) => {
        this.resourceList = res;
        console.log(this.resourceList);
      },
      (error: any) => {
        console.error('Error fetching resources:', error);
      }
    );
  }


  openBookingForm(data: any) {
    console.log(data);
    if(data.quantity == 0){
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: 'Resource is not available.',
      });
    }
    else{

      this.router.navigate([`/booking/${data.id}`]);
    }
  }
}
