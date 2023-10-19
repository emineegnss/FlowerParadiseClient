import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MessageType } from '../admin/alertify.service';

@Injectable({
  providedIn: 'root',
})
export class CustomToastrService {
  constructor(private toastr: ToastrService) {}
  message(
    message: string,
    title: string,
    options:ToastrOptions
  ) {
    this.toastr[options.messageType](message, title,{
      positionClass:options.position
    });
    
  }
}
export class ToastrOptions{
  messageType: ToastrMessageType= ToastrMessageType.Error;
  position: ToastrPosition = ToastrPosition.TopCenter

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
  TopFullWidth = 'toast-top-full-width',
  BottomFullWidth = 'toast-bottom-full-width',
  TopCenter = 'toast-top-center',
  BottomCenter = 'toast-bottom-center',
}
