
// angular
import { Routes } from '@angular/router';
import { AuthGuard } from './app/components/authGuard/authGuard.component';
import { SignUpRoutes } from './app/components/signup/signup.routes';
import { LoginRoutes } from './app/components/login/login.routes';
import { AppComponent } from './app/components/app/app.component';
import { DashboardRoutes } from './app/components/dashboard/dashboard.routes';
import { AddStudentRoutes } from './app/components/addStudent/addStudent.routes';
const StudentRoutes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },

  ...SignUpRoutes,
  ...LoginRoutes,
  {
    path: 'app', component: AppComponent,
    resolve: {},
    canActivate: [AuthGuard],

    children: [
      ...DashboardRoutes,
      ...AddStudentRoutes,
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: '*', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  },
   {
        path: '**',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];


export const AppRoutes: Routes = [
  ...StudentRoutes
]