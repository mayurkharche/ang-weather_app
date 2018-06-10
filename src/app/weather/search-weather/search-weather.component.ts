import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-weather',
  templateUrl: './search-weather.component.html',
  styleUrls: ['./search-weather.component.css']
})
export class SearchWeatherComponent implements OnInit {

  searchText: String = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getWeatherData() {
    console.log('Function called : Should navigate to Weather Url');
    this.router.navigate(['./weather', this.searchText]);
  }

}
