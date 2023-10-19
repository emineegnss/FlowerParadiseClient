import { Component, OnInit } from '@angular/core';
import { AlertifyOptions, AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private alertifyService:AlertifyService){}
  ngOnInit(): void {
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
