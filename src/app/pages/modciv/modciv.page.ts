import { Component, OnInit } from '@angular/core';
import { DataAccessService } from 'src/app/services/data-access.service';
import { ConnToModService } from 'src/app/services/conn-to-mod.service';
import { Router } from '@angular/router';
import { Civilization } from 'src/app/models/civilization';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modciv',
  templateUrl: './modciv.page.html',
  styleUrls: ['./modciv.page.scss'],
})
export class ModcivPage implements OnInit {

  civilization: Civilization = {
    _id: '',
    name: '',
    expansion: '',
    army: ''
  };

  _id;
  error;

  constructor(private dataAccessService: DataAccessService, private connToMod: ConnToModService, public router: Router,
              public toastController: ToastController) { }

  public ModCivs(civilization, _id) {
    this.error = 0;
    console.log(civilization);
    const data = {id: _id};
    console.log(data.id)
    this.dataAccessService.modUrl(data, civilization)
      .subscribe( res => {
        console.log(res);
        if (res) {
          this.router.navigate([`/nav/principal`]);
        } else {
          this.errorToast('');
        }
      },
      error => {
        this.errorToast(error.message);
      });
  }

  async errorToast(message) {
    const toast = await this.toastController.create({
      message: 'ERROR. ' + message,
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
    this.civilization = this.connToMod.getCiv();
    console.log(this.civilization);
  }

}
