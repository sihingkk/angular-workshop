import { ContentTogglePage } from './app.po';

describe('content-toggle App', () => {
  let page: ContentTogglePage;

  beforeEach(() => {
    page = new ContentTogglePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
