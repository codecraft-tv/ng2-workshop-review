import {Injectable} from '@angular/core';
import {Joke} from './joke';

@Injectable()
export class JokeDataService {
  lastId: number = 0;

  jokes: Joke[] = [];

  constructor() {
  }

 
  addJoke(joke: Joke): JokeDataService {
    if (!joke.id) {
      joke.id = ++this.lastId;
    }
    console.log(joke);
    this.jokes.push(joke);
        console.log(this.jokes);
    return this;
  }

  deleteJokeById(id: number): JokeDataService {
    this.jokes = this.jokes
      .filter(joke => joke.id !== id);
    return this;
  }

  updateJokeById(id: number, values: Object = {}): Joke {
    let joke = this.getJokeById(id);
    if (!joke) {
      return null;
    }
    Object.assign(joke, values);
    return joke;
  }

 
  getAllJokes(): Joke[] {
    return this.jokes;
  }

  getJokeById(id: number): Joke {
    return this.jokes
      .filter(joke => joke.id === id)
      .pop();
  }

 
}
