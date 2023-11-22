import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-flowers',
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.css'],
})
export class FlowersComponent extends BaseComponent implements OnInit {
  constructor(
    spinner: NgxSpinnerService,
    private httpClientService: HttpClientService
  ) {
    super(spinner);
  }
  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom);
    this.httpClientService
      .get({
        controller: 'flowers',
      })
      .subscribe((data) => console.log(data));

    this.httpClientService.post(
      {
        controller: 'flowers',
      },
      {
        name: 'orkide',
        stock: 123,
        price: 23,
      }
    ).subscribe();
    this.httpClientService.post(
      {
        controller: 'flowers',
      },
      {
        name: 'orkide 2 ',
        stock: 3,
        price: 65,
      }
    ).subscribe();
  }
}
