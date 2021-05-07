import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/AppState';
import { ICar } from 'src/app/interfaces/car.interface';

@Component({
  selector: 'pm-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor() { }
  cars: ICar[] = [

  ]

  ngOnInit(): void {
    console.log(AppState.cars)
    this.cars = AppState.cars;
  }

  Bid(carData: ICar) {
    console.log("bidding", carData)
    carData.price += 1000
  }

}
