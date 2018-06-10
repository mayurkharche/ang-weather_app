import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from './data';

@Injectable()
export class WeatherService {
    appId: String = 'a8d24c27b56a90015cc2721aabd98ef6';

    constructor(private _http: HttpClient) { }

    getWeatherData(city: String) {
        console.log('https://api.openweathermap.org/data/2.5/weather?q=' + city + ',IN&appid=' + this.appId);
        return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + ',IN&appid=' + this.appId);
    }
}
