import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core'
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent  {

  translate: TranslateService = inject(TranslateService);

  languageChange(event: Event) {
    const selectedLanguage = (event.target as HTMLSelectElement).value;
    this.translateText(selectedLanguage);
  }

  translateText(lang:string) {
 this.translate.use(lang);
}
}
