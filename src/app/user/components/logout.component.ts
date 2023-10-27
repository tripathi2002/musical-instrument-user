import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { SharedService } from 'src/app/data/services/shared.service';
import { error, success, loading } from 'src/app/data/data';
import { actions } from 'src/app/data/class';
@Component({
  selector: 'app-logout',
  templateUrl: '../pages/logout.component.html',
  styleUrls: ['../styles/logout.component.scss', '../../data/styles/dialogBox.scss'],
  animations: [error, success, loading]
})
export class LogoutComponent extends actions {

  constructor(
    public dialogRef: DialogRef,
    // private us: UserService,
    public sharedService: SharedService,
  ) {
    super("Log Out Page")
  }
  // animal: 'panda' | 'unicorn' | 'lion';

  sessionEnd() {
    this.trueLoading();
    localStorage.clear();
    this.sharedService.updateHeaderData()
    this.trueSuccess("Log Out Succesfully");
    setTimeout(function () {
      this.dialogRef.close();
    }.bind(this), 1000);
  }
}
