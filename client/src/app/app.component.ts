import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { TestBed, async } from '@angular/core/testing';
// import { AppComponent } from './app.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(public auth: AuthenticationService) {}
}
