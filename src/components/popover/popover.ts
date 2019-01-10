import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global'

/**
 * Generated class for the PopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@IonicPage()
@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class PopoverComponent {

  text: string;
  
  constructor(public global:GlobalProvider) {
    console.log('Hello PopoverComponent Component');
    this.text = 'Signature Pad';
  }

  change(event){
    console.log(event)
  }

}
