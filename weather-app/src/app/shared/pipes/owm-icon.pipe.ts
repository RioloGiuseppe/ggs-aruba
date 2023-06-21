import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'owmIcon'
})
export class OwmIconPipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {
    const size = args[0] || '2x';
    return `https://openweathermap.org/img/wn/${value}@${size}.png`;
  }

}
