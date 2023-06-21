import { Component } from '@angular/core';
import { Weather, WeatherService } from 'src/app/shared';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  weather: Weather | undefined;

  constructor(private weatherService: WeatherService) { }

  search(city: string) {
    this.weatherService.getWeather(city).subscribe((weather: Weather) => {
      this.weather = weather;
    });
  }
}
