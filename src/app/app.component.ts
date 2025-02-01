import { Component, inject } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { DateLocalePipe } from './date-locale.pipe';

import localeFr from '@angular/common/locales/fr';
import localeUz from '@angular/common/locales/uz';
import localeRu from '@angular/common/locales/ru';
import localeEn from '@angular/common/locales/en';



registerLocaleData(localeFr);
registerLocaleData(localeUz);
registerLocaleData(localeRu);
registerLocaleData(localeEn);

 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TranslateModule, DateLocalePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent  {

  translate: TranslateService = inject(TranslateService);

  get today(): Date {
    return new Date();
  }

  languageChange(event: Event) {
    const selectedLanguage = (event.target as HTMLSelectElement).value;
    this.translateText(selectedLanguage);
  }

  translateText(lang:string) {
 this.translate.use(lang);
}
}
