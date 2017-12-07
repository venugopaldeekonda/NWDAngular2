import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Northwind';
  public options={
    position:["bottom","right"],
    timeOut:30000,
    lastOnBottom:true
  }
}
