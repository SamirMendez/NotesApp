import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { LoginPageModule } from '../core/authentication/login/login.module';
import { RegisterPageModule } from '../core/authentication/register/register.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    LoginPageModule,
    RegisterPageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
