import { Component, OnInit } from '@angular/core';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
declare var $:any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FlowerParadiseClient';
  constructor(private customToastr:CustomToastrService){}
  ngOnInit(): void {
    //this.customToastr.message("Başlık","Alt Başlık",{messageType:ToastrMessageType.Success,position:ToastrPosition.BottomFullWidth})
  }
  
}

