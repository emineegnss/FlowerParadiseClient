import { Injectable } from '@angular/core';
declare var alertify:any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }
 // message(message:string,messageType:MessageType,position:Position,delay:number = 3,dismissOther:boolean=false){
  message(message:string,options: Partial<AlertifyOptions> ){

   const msg = alertify[options.messageType](message)
    alertify.set('notifier','position', options.position);
    alertify.set('notifier','delay', options.delay);
    if(options.dismissOther){
      msg.dismissOthers();
    }
  }
  dismiss(){
    alertify.dismissAll();
  }
}
export class AlertifyOptions{
  constructor(){}
  messageType:MessageType = MessageType.Error;
  position:Position = Position.TopRight;
  delay:number = 3;
  dismissOther:boolean= false
}
export enum MessageType{
  Error =  'error',
  Message = 'message',
  Success = 'success',
  Notify = 'notify',
  Warning = 'warning'
} 
export enum Position{
  TopRight='top-right',
  TopCenter = 'top-center',
  TopLeft = 'top-left',
  BottomRight='bottom-right',
  BottomCenter = 'bottom-center',
  BottomLeft = 'bottom-left'
}