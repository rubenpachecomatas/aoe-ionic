import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState = null;
  error = 0;
  message;

  constructor(public afAuth: AngularFireAuth, private router: Router, public toastController: ToastController) {

    // Keep the session active.

    this.afAuth.authState.subscribe(res => {
      this.authState = res;
    });
  }

  // Log Out

  logout() {
    this.afAuth.auth.signOut();
  }

  // Log In

  login(email, password) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((success) => {
        this.router.navigate([`/home`]);
      }).catch((error) =>  {
        this.errorToast(error.message);
      });
  }

  // Sign In

  signin(email, password) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
     .then((success) => {
       const name = email.substring(0, email.lastIndexOf('@'));
       console.log(name);
       this.afAuth.auth.currentUser.updateProfile({
         displayName: name
       });
       console.log(this.afAuth.auth.currentUser.displayName);
       this.router.navigate([`/home`]);
     }).catch((error) =>  {
      this.errorToast(error.message);
    });
  }

  // Res Password

  resPassword(emailR) {
    this.afAuth.auth.sendPasswordResetEmail(emailR).then(function() {
      // Email sent.
    }).catch(error => {
      this.errorToast(error.message);
    });
  }

  // Check if someone is logged.

  checkUser() {
    if (this.afAuth.auth.currentUser) {
      return true;
    }
    return false;
    }

  // Toasts

  async errorToast(message) {
    const toast = await this.toastController.create({
      message: 'ERROR. ' + message,
      duration: 2000
    });
    toast.present();
  }

}
