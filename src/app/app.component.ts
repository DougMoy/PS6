import { Component } from '@angular/core';
import * as mockData from './joke.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS6';
  jokes: any = (mockData as any).default.body;

  showJokes: boolean = false;

  fetchJokes() {
    this.showJokes = !this.showJokes;
  }
}
