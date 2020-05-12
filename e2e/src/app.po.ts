import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getTime(hour: number): string {
    const time  = ((hour + 11) % 12 + 1);
    let suffix: string;
    // it is pm if hours from 12 onwards
    (hour === 0) ? (suffix = 'am') : (suffix = (hour >= 12) ? 'pm' : 'am');

    return time + suffix;
  }

  // getTime(hour: number): string {
  //   const time  = ((hour + 11) % 12 + 1);
  //   // let suffix: string;
  //   // // it is pm if hours from 12 onwards
  //   // (hour === 0) ? (suffix = 'am') : (suffix = (hour >= 12) ? 'pm' : 'am');

  //   return time.toString();
  // }
}
