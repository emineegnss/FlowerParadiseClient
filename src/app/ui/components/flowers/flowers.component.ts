import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';

@Component({
  selector: 'app-flowers',
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.css']
})
export class FlowersComponent extends BaseComponent implements OnInit {
  constructor(spinner:NgxSpinnerService){
    super(spinner)
  }
  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallScaleMultiple);
  }

}
