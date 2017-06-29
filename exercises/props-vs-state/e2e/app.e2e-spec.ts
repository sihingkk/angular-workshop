import { PropsVsStatePage } from './app.po';

describe('props-vs-state App', () => {
  let page: PropsVsStatePage;

  beforeEach(() => {
    page = new PropsVsStatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
