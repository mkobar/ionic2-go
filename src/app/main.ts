/**** debug mode ****/
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

/**** prod mode 
import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';

import { AppModuleNgFactory } from './app.module.ngfactory';

enableProdMode();
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
*****/
