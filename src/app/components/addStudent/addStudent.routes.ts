import { Route } from '@angular/router';
import { AddStudentComponent } from './index';
import { AuthGuard } from '../authGuard/authGuard.component';
export const AddStudentRoutes: Route[] = [
    {
        path: 'addStudent',
        component: AddStudentComponent
    }
];
