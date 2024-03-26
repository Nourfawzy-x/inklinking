import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { DeleteComponent } from './components/delete/delete.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UpdateAdminComponent } from './components/update-admin/update-admin.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'home', canActivate: [authGuard], component: HomeComponent },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    component: DashboardComponent,
  },
  { path: 'booklist', canActivate: [authGuard], component: BookListComponent },
  { path: 'userlist', canActivate: [authGuard], component: UserListComponent },
  {
    path: 'bookDetails/:id',
    canActivate: [authGuard],
    component: BookDetailsComponent,
  },
  { path: 'delete/:id', canActivate: [authGuard], component: DeleteComponent },
  {
    path: 'editUser/:id',
    canActivate: [authGuard],
    component: UpdateUserComponent,
  },
  {
    path: 'adminprofile',
    canActivate: [authGuard],
    component: AdminProfileComponent,
  },
  {
    path: 'editadmin',
    canActivate: [authGuard],
    component: UpdateAdminComponent,
  },
  { path: 'edit/:id', canActivate: [authGuard], component: EditComponent },
  { path: 'add', canActivate: [authGuard], component: AddComponent },
  { path: '**', component: NotFoundComponent },
];
