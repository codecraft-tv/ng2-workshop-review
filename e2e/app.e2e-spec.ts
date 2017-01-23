import { JokeApplicationPage } from './app.po';

describe('joke-application App', function() {
  let page: JokeApplicationPage;

  beforeEach(() => {
    page = new JokeApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
