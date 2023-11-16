import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

export class BaseComponent {
  /**
   *
   */
  constructor(private spinner: NgxSpinnerService) {}
  showSpinner(spinnerNameType: SpinnerType){
    this.spinner.show(spinnerNameType);
    setTimeout(()=> this.hideSpinner(spinnerNameType),800)
  }
  hideSpinner(spinnerNameType: SpinnerType){
    this.spinner.hide(spinnerNameType);
  }
}
export enum SpinnerType{
  BallSpin = "s1",
  BallScaleMultiple = "s2",
  BallAtom = "s3"
}
