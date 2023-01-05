import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { UserSignupComponent } from './component/user-signup/user-signup.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  { path: '', redirectTo: '/user-signup', pathMatch: 'full' },
  { path: 'user-signup', component: UserSignupComponent, pathMatch: 'full' },
  { path: 'user-login', component: UserLoginComponent, pathMatch: 'full' },
  { path: 'app-navigation', component: NavigationComponent },
  //wildcard routing
  { path: '**', component: PageNotFoundComponent } // Wildcard route for a 404 page

  //lazy loading



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
