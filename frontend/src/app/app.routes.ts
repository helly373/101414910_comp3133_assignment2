import { Routes } from '@angular/router';
import { LoginComponent } from './components/LoginDetails/loginDetails.component';
import { SignupComponent } from './components/signupDetails/signupDetails.component';
import { EmployeeListComponent } from './components/ListEmployee/ListEmployee.component';
import { AddEmployeeComponent } from './components/AddEmployee/AddEmployee.component';
import { EmployeeDetailsComponent } from './components/InfoEmployee/InfoEmployee.component';
import { UpdateEmployeeComponent } from './components/EmployeeUpdateDetails/EmployeeUpdatedetails.component';
import { AuthGuard } from './guards/auth.guard'; // Optional if you're using route protection

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'employees',
    component: EmployeeListComponent,
    canActivate: [AuthGuard], // Optional protection
  },
  {
    path: 'add-employee',
    component: AddEmployeeComponent,
    canActivate: [AuthGuard], // Optional protection
  },
  {
    path: 'employee/:id',
    component: EmployeeDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'update-employee/:id',
    component: UpdateEmployeeComponent,
    canActivate: [AuthGuard],
  },
  // Catch-all fallback route
  { path: '**', redirectTo: 'login' },
];
