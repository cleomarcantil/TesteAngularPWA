import { Component, AfterViewInit, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'TesteAngularPWA';

  get onlineStatus(): boolean {
    return window.navigator.onLine;
  }

  ngOnInit(): void {
    window.addEventListener("online", () => console.log('online'));
    window.addEventListener("offline", () => console.log('offline'));

  }

  ngAfterViewInit(): void {

  }



}
