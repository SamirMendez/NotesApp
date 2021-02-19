import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { LoginPage } from '../core/authentication/login/login.page';
import { RegisterPage } from '../core/authentication/register/register.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private nativeToast: ToastController, private nativeModal: ModalController) {}


  // Funcion para mostrar el modal de login
  async showLogin(): Promise<any> {
    const loginModal = await this.nativeModal.create({
      component: LoginPage,
      animated: true,
      swipeToClose: true,
      showBackdrop: true,
      cssClass: 'loginModal'
    });
    loginModal.present();
  }
  // Funcion para mostrar el modal de login
  // Funcion para mostrar el modal de registro
  async showRegister(): Promise<any> {
    const registerModal = await this.nativeModal.create({
      component: RegisterPage,
      animated: true,
      swipeToClose: true,
      showBackdrop: true,
      cssClass: 'registerModal'
    });
    registerModal.present();
  }
  // Funcion para mostrar el modal de registro
}
