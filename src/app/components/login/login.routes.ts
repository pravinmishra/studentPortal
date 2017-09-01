import { Route } from '@angular/router';
import { LoginComponent } from './index';
import { AuthGuard } from '../authGuard/authGuard.component';
export const LoginRoutes: Route[] = [
    {
        path: 'login',
        component: LoginComponent,
        canActivateChild: [AuthGuard],
        data: { title: 'Login'}
    }

];

