import { inject, Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Pipe({
  name: 'dateLocale',
  standalone: true,
  pure: false,
})
export class DateLocalePipe implements PipeTransform {

  private translateService = inject(TranslateService);
  private datePipe = new DatePipe('en-US');
  private currentLang$ = new BehaviorSubject<string>(this.translateService.currentLang ||'uz');

  constructor () {
    this.translateService.onLangChange.subscribe(event => {
      this.currentLang$.next(event.lang)
    });
  }

  transform(value: Date | string | number, format: string = 'mediumDate'): string {
    const currentLang = this.translateService.currentLang || 'uz';
    return this.datePipe.transform(value, format, undefined, currentLang) || '';
  }

}
