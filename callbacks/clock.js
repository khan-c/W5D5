class Clock {
  constructor() {
    const date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    this.printTime();
    const tick = this._tick.bind(this);
    setInterval(tick, 1000);
  }

  printTime() {
    const time = `${this.hours}:${this.minutes}:${this.seconds}`;
    console.log(time);
  }

  _tick() {
    this.seconds++;
    if (this.seconds > 59) {
      this.minutes++;
      this.seconds = 0;
    }
    if (this.minutes > 59) {
      this.minutes = 0;
      this.hours++;
    }
    if (this.hours > 23) {
      this.hours = 0;
    }
    this.printTime();
  }
}

new Clock();
