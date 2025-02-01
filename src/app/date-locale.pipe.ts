import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateLocale',
  standalone: true
})
export class DateLocalePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
