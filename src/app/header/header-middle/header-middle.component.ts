import { Component, HostListener } from '@angular/core';
import { languages, userItems } from '../header-data/header-data';
import { Router } from '@angular/router';
import { LogoutComponent } from 'src/app/user/components/logout.component';
import { Dialog } from '@angular/cdk/dialog';
import { SharedService } from 'src/app/data/services/shared.service';

@Component({
  selector: 'app-header-middle',
  templateUrl: './header-middle.component.html',
  styleUrls: ['./header-middle.component.scss']
})
export class HeaderMiddleComponent {
  
  userItems:any;
  canShowSearchAsOverlay = false;
  selectedLanguage: any;

  languages = languages;

  @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      this.checkCanShowSearchAsOverlay(window.innerWidth);
    }

    constructor(public router: Router,
      public dialog: Dialog,
      private sharedService: SharedService
      ){}

    ngOnInit(): void {
      this.checkCanShowSearchAsOverlay(window.innerWidth);
      this.selectedLanguage = this.languages[0];

      this.sharedService.headerData$.subscribe((data)=>{
        this.userItems = data;
      })
    }

    checkCanShowSearchAsOverlay(innerWidth: number): void {
      if(innerWidth < 850){
        this.canShowSearchAsOverlay=true;
      } else {
        this.canShowSearchAsOverlay=false;
      }
    }

    
  openDialog() {
    this.dialog.open(LogoutComponent);
  }

}
