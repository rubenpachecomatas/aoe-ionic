import { Component, OnInit } from '@angular/core';
import { DataAccessService } from '../../services/data-access.service';
import { Router } from '@angular/router';
import { ConnToModService } from '../../services/conn-to-mod.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  civilizations;
  error = 0;
  errorD = '';
  filterPost = '';
  show = false;
  saveId = '';

  constructor(private connToMod: ConnToModService, private dataAccessService: DataAccessService, public router: Router,
              public navCtrl: NavController, private alertController: AlertController) {
    this.dataAccessService.getUrl().subscribe(res => {
      this.civilizations = res;
    })
    console.log (this.civilizations);
  }

  ngOnInit() {
  }

  sendIdToMod(civilization) {
    this.connToMod.setCiv(civilization);
    console.log(civilization);
    this.router.navigate([`/nav/modciv`]);
  }

  async confirm(id) {
    console.log(id);
    const confirmAlert = await this.alertController.create({
      header: 'Are you sure',
      message: 'Life isn\'t a game.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Canceled');
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            this.delCivs(id);
            console.log('Confirm Okay');
          }
        }
      ]
    });
    await confirmAlert.present();
  }

  public delCivs(id) {
    console.log(id);
    const data = { id: id };
    this.dataAccessService.delUrl(data)
      .subscribe(res => {
        if (res.message === 'Deleted') {
          location.reload();
        } else if (res.message === 'Null') {
          this.errorD = 'notdeleted';
        }
      },
      error => {
        if (error.status === 500) {
          this.errorD = 'notdeleted';
        }
      });
  }
  
}
