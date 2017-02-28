import { FintestPage } from './app.po';

describe('fintest App', function() {
  let page: FintestPage;

  beforeEach(() => {
    page = new FintestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
