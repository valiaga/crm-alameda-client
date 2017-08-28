import { CrmAlamedaClientPage } from './app.po';

describe('crm-alameda-client App', () => {
  let page: CrmAlamedaClientPage;

  beforeEach(() => {
    page = new CrmAlamedaClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to crm!');
  });
});
