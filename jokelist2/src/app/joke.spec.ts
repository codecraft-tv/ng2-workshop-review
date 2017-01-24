import {Joke} from './joke';

describe('Joke', () => {
  it('should create an instance', () => {
    expect(new Joke()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let joke = new Joke({
      setup: 'knock knock',
      punchline: 'who is there' 
     });
    expect(joke.setup).toEqual('knock knock');
    expect(joke.punchline).toEqual('who is there');
  });
});
