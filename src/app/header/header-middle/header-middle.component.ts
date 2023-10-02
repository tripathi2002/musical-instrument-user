import { Component, HostListener } from '@angular/core';
import { languages, userItems } from '../header-data/header-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-middle',
  templateUrl: './header-middle.component.html',
  styleUrls: ['./header-middle.component.scss']
})
export class HeaderMiddleComponent {
  
  userItems = userItems;
  canShowSearchAsOverlay = false;
  selectedLanguage: any;

  languages = languages;

  @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      this.checkCanShowSearchAsOverlay(window.innerWidth);
    }

    constructor(public router: Router){}

    ngOnInit(): void {
      this.checkCanShowSearchAsOverlay(window.innerWidth);
      this.selectedLanguage = this.languages[0];
    }

    checkCanShowSearchAsOverlay(innerWidth: number): void {
      if(innerWidth < 850){
        this.canShowSearchAsOverlay=true;
      } else {
        this.canShowSearchAsOverlay=false;
      }
    }
}
