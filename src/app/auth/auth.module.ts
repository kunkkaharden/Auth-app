import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthTelegramComponent } from './components/auth-telegram/auth-telegram.component';
import { AuthGoogleComponent } from './components/auth-google/auth-google.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainComponent } from './pages/main/main.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, MainComponent],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule],
  exports: [],
})
export class AuthModule {}
