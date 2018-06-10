import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Data } from '../data';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-weather',
  templateUrl: './view-weather.component.html',
  styleUrls: ['./view-weather.component.css']
})
export class ViewWeatherComponent implements OnInit {

  private city: String;
  private response: Data;
  private tempF: number;
  private months: String[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                              'August', 'September', 'October', 'November', 'December'];
  private days: String[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  private today: String;
  private todayDate: number;
  private todayMonth: String;
  private date: Date;

  constructor(private service: WeatherService, private route: ActivatedRoute) {
    this.city = this.route.snapshot.paramMap.get('city');
    console.log('City : ', this.city);
   }

  ngOnInit() {
    this.service.getWeatherData(this.city).subscribe((data: Data) => {
      console.log('Response : ', data);
      this.response = data;
      this.convert();
    });
  }

  private convert() {
    this.date = new Date();
    this.today = this.days[this.date.getDay()];
    this.todayMonth = this.months[this.date.getMonth()];
    this.todayDate = this.date.getDate();
    this.response.main.temp = Math.floor(this.response.main.temp - 273.15);
    this.response.main.temp_max = Math.floor(this.response.main.temp_max - 273.15);
    this.tempF = Math.floor((1.8 * this.response.main.temp) + 32);
  }

}
