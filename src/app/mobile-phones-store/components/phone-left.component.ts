import { Component } from '@angular/core';
import { leftData } from '../phone-data/phone.data';

@Component({
  selector: 'app-phone-left',
  templateUrl:'../pages/phone-left.component.html',
  styleUrls:['../styles/phone-left.component.scss']
})
export class PhoneLeftComponent {
  data = leftData;

}
