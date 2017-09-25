import { UcompilerFrontPage } from './app.po';

describe('ucompiler-front App', () => {
  let page: UcompilerFrontPage;

  beforeEach(() => {
    page = new UcompilerFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
