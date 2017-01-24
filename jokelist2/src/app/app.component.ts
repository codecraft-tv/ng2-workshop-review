import {Component} from '@angular/core';
import {Joke} from './joke';
import {JokeDataService} from './joke-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [JokeDataService]
})
export class AppComponent {

  newJoke: Joke = new Joke();

  constructor(private jokeDataService: JokeDataService) {
  }

  addJoke() {
    this.jokeDataService.addJoke(this.newJoke);
    this.newJoke = new Joke();
  }

  removeJoke(joke) {
    this.jokeDataService.deleteJokeById(joke.id);
  }

  get jokes() {
    return this.jokeDataService.getAllJokes();
  }

}
