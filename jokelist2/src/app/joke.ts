export class Joke {
  public id: number;
  public setup: string;
  public punchline: string;
  public hide: boolean;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  } 

  toggle() {
    this.hide = !this.hide;
  }


}
