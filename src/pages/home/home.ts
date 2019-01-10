import { Component } from '@angular/core';
import { NavController, IonicPage, PopoverController } from 'ionic-angular';
import swal from 'sweetalert';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private popoverCtrl: PopoverController) {

  }

  onclick(){
    swal("Good job!", "You clicked the button!", "warning");
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create('PopoverComponent');
    popover.present({
      ev: myEvent
    });
  }
}
