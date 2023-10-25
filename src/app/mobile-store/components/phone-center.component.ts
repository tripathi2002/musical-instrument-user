import { Component } from '@angular/core';
import { centerMiddle, centerTop } from '../phone-data/phone.data';

@Component({
  selector: 'app-phone-center',
  templateUrl:'../pages/phone-center.component.html',
  styleUrls:['../styles/phone-center.component.scss'] 
})
export class PhoneCenterComponent {
  centerTop=centerTop;
  centerMiddle=centerMiddle;
}
