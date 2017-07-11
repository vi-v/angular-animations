import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courseGoals = [
    { title: 'title 1', isActive: true },
    { title: 'title 2', isActive: false },
    { title: 'title 3', isActive: false }
  ]
}
