import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
console.log("App is running from JIT");
platformBrowserDynamic().bootstrapModule(AppModule);
