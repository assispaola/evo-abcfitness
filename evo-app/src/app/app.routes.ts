import { UserDetailsComponent } from './features/user-details/user-details';
import { UserRegistrationComponent } from './features/user-registration/user-registration';
import { Routes } from '@angular/router';


export const appRoutes: Routes = [
  {
    path: '',
    component: UserRegistrationComponent
  },
  {
    path: 'details',
    component: UserDetailsComponent
  }
];
