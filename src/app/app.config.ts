import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader'

export function creatTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './i18n/', '.json'); 
}

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),

    importProvidersFrom([
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory:creatTranslateLoader,
          deps:[HttpClient]
        },

        defaultLanguage: 'en',

      }),
    ]),


     provideRouter(routes),
     provideHttpClient(withFetch())
   ],
};
