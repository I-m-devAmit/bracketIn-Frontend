import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './feature/module/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserSignupComponent } from './component/user-signup/user-signup.component';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { SidenavsComponent } from './shared/components/sidenavs/sidenavs.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { Ng2TelInputModule } from 'ng2-tel-input';

@NgModule({
  declarations: [
    AppComponent,
    UserSignupComponent,
    UserLoginComponent,
    PageNotFoundComponent,
    SidenavsComponent,
    NavigationComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    Ng2TelInputModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
