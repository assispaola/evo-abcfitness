import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogoComponent } from './ui/logo/logo';
import { UserRegistrationComponent } from './features/user-registration/user-registration';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LogoComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class AppComponent {
  protected readonly title = signal('evo-app');
}
