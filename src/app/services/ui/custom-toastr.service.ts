import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class CustomToastrService {
  constructor(private toastr: ToastrService) {}
  message(
    message: string,
    title: string,
    messageType: ToastrMessageType,
    position: ToastrPosition
  ) {
    this.toastr[messageType](message, title,{
      positionClass:position
    });
    
  }
}
export enum ToastrMessageType {
  Error = 'error',
  Message = 'message',
  Success = 'success',
  Warning = 'warning',
}
export enum ToastrPosition {
  TopRight = 'toast-top-right',
  BottomRight = 'toast-bottom-right',
  BottomLeft = 'toast-bottom-left',
  TopLeft = 'toast-top-left',
  TopFullWidth = 'toastr-top-full-witdth',
  BottomFullWidth = 'toastr-bottom-full-witdth',
  TopCenter = 'toast-top-center',
  BottomCenter = 'toast-bottom-center',
}
