import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { AddressListComponent } from './pages/address-list/address-list.component';
import { AddAddressComponent } from './pages/add-address/add-address.component';
import { EditAddressComponent } from './pages/edit-address/edit-address.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default to home
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register',component:RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'address-list', component: AddressListComponent, canActivate: [AuthGuard] },
  { path: 'add-address', component: AddAddressComponent, canActivate: [AuthGuard] },
  { path: 'edit-address/:id', component: EditAddressComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
