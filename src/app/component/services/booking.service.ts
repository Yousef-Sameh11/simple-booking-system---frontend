import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor( private http:HttpClient) { }
  baseApi='https://localhost:7034/'

  // Method to get all resources
  getAllResources() {
    return this.http.get(`${this.baseApi}api/Resource/GetAllResources`);
  }
  bookResource(item:any){
    return this.http.post(`${this.baseApi}api/Booking/BookResource`,item)
    
  }
}
