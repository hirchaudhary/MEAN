import { SWiTcHbOaRdPage } from './app.po';

describe('s-wi-tc-hb-oa-rd App', () => {
  let page: SWiTcHbOaRdPage;

  beforeEach(() => {
    page = new SWiTcHbOaRdPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
