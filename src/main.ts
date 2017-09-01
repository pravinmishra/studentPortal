import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { StudentAppModule } from './student-app.module';
import './assets/scss/custom.scss';
import '../node_modules/font-awesome/scss/font-awesome.scss';
import '../node_modules/nvd3/build/nv.d3.css';

if (process.env.ENV === 'production') {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(StudentAppModule);
