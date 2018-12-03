import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit {
  title: string = 'Elmaw2af';
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor(private http : HttpClient)
  {

  }
  ngOnInit(){

   

    

    this.http.get("http://localhost:8080/GetLocations").subscribe(res => {
      console.log(res);
  })  

  this.http.get("http://localhost:8080/GetAllAreasCoordinates").subscribe(res => {
    console.log(res);
})  

  this.http.get("http://localhost:8080/GetPointCoordinatesInArea/"+"Tagmo3").subscribe(res => {
    console.log(res);
})  

this.http.get("http://localhost:8080/ViewPointInfo"+"/29.984500"+"/31.440142").subscribe(res => {
    console.log(res);
})  

this.http.get("http://localhost:8080/ViewPointInfo"+"/30.016155"+"/'31.500141").subscribe(res => {
    console.log(res);
})  

   }

}