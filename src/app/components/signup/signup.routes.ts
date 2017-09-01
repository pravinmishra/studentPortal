import { Route } from '@angular/router';
import { SignUpComponent } from './index';
import { AuthGuard } from '../authGuard/authGuard.component';
export const SignUpRoutes: Route[] = [
    {
        path: 'signup',
        component: SignUpComponent,
        canActivateChild: [AuthGuard],
        data: { title: 'Sign Up'}
    }

];

