import { JokelistPage } from './app.po';

describe('jokelist App', function() {
  let page: JokelistPage;

  beforeEach(() => {
    page = new JokelistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
