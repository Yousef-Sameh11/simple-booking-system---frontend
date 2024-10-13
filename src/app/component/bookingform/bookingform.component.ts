import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../services/booking.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.css']
})
export class BookingformComponent {
  resourceId:number=0;
  constructor(private ActivatedRoute:ActivatedRoute,private service:BookingService,private route:Router){
    this.resourceId= Number(this.ActivatedRoute.snapshot.params['id'])
    console.log(this.resourceId);
    
  }
  dateFrom: string = '';
  dateTo: string = '';
  quantity: number = 1;  // Setting a default quantity

//   book() {
//     console.log(`Booking from ${this.dateFrom} to ${this.dateTo}, quantity: ${this.quantity}`);
//     let model={
    
//       dateFrom:this.dateFrom ,
//       dateTo: this.dateTo,
//       bookedQuantity: this.quantity,
//       resourceId: this.resourceId
//     }
//     this.service.bookResource(model).subscribe((res:any)=>{
// console.log("done");

//     },(error:any)=>{
//       console.log(error);
      
//     })
//   }
book() {
  if (!this.dateFrom || !this.dateTo || this.quantity === null) {
    Swal.fire({
      icon: 'error',
      title: 'Oops!',
      text: 'Please fill in all required fields.',
    });
    return;
  }

  console.log(`Booking from ${this.dateFrom} to ${this.dateTo}, quantity: ${this.quantity}`);
  
  let model = {
    dateFrom: this.dateFrom,
    dateTo: this.dateTo,
    bookedQuantity: this.quantity,
    resourceId: this.resourceId
  };

  this.service.bookResource(model).subscribe(
    (res: any) => {
      console.log("Booking successful");
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: res.message,
      });
      this.route.navigate(['resources-list'])
    },
    (error: any) => {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text:  error.error.message,
      });
    }
  );
}

}
