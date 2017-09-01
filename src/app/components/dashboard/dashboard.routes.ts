import { Route } from '@angular/router';
import { DashboardComponent } from './index';
import { AuthGuard } from '../authGuard/authGuard.component';
export const DashboardRoutes: Route[] = [
    {
        path: 'dashboard',
        component: DashboardComponent
    }
];
