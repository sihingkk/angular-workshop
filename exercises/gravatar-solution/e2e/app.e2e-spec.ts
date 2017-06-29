import { GravatarPage } from './app.po';

describe('gravatar App', () => {
  let page: GravatarPage;

  beforeEach(() => {
    page = new GravatarPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
