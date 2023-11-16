import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { AlertifyOptions, AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends BaseComponent implements OnInit {
  constructor(spinner: NgxSpinnerService,private alertifyService:AlertifyService){
    super(spinner);
  }
  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom);
  }
  m(){
    // var a = new AlertifyOptions();
    //   a.messageType=MessageType.Notify,
    //   a.position=Position.TopRight,
    //   a.delay=4,
      
    
    this.alertifyService.message("Başarısız", {
      messageType: MessageType.Error,
      position : Position.BottomRight,
      delay:2,
    });
    
  }
  d(){
    this.alertifyService.dismiss();

  }
}
