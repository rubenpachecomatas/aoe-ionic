import { Component, OnInit } from '@angular/core';
import { Civilization } from 'src/app/models/civilization';
import { DataAccessService } from 'src/app/services/data-access.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-addciv',
  templateUrl: './addciv.page.html',
  styleUrls: ['./addciv.page.scss'],
})
export class AddcivPage implements OnInit {

  civilization: Civilization = {
    name: '',
    expansion: '',
    army: ''
  };

  error;

  constructor(private dataAccessService: DataAccessService, public toastController: ToastController) { }

  async errorToast(message) {
    const toast = await this.toastController.create({
      message: 'ERROR. ' + message,
      duration: 2000
    });
    toast.present();
  }

  async successToast() {
    const toast = await this.toastController.create({
      message: 'Changes commited',
      duration: 2000
    });
    toast.present();
  }

  public postCivs(civilization) {
    console.log(civilization);
    this.dataAccessService.addUrl(civilization)
    .subscribe( res => {
      console.log(res);
      if (res) {
        this.successToast();
        location.reload();
      } else {
        this.errorToast('');
      }
    },
      error => {
        this.errorToast(error.message);
      });
  }

  ngOnInit() {
  }

}
