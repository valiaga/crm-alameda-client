import { browser, by, element } from 'protractor';

export class CrmAlamedaClientPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('crm-root h1')).getText();
  }
}
