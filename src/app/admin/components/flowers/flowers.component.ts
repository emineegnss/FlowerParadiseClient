import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Create_Flower } from 'src/app/contracts/create_flower';
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
      .get<Create_Flower[]>({
        controller: 'flowers',
      })
      .subscribe((data) => console.log(data));

    // this.httpClientService
    //   .post(
    //     {
    //       controller: 'flowers',
    //     },
    //     {
    //       name: 'Kırmızı Gül',
    //       stock: 123,
    //       price: 23,
    //       speciesId: '',
    //     }
    //   )
    //   .subscribe((data) => console.log(data));
    // this.httpClientService.put({
    //   controller: 'flowers',
    // },
    // {
    //   id : "b28c909e-5683-4495-953a-a38ec9dac019",
    //   name: "Pembe Gül",
    //   stock: 33,
    //   price: 22,
    // }
    // ).subscribe((data) => console.log(data))
    
    // this.httpClientService.delete({
    //   controller: 'flowers'
    // },"746d8920-6063-4f9f-8aa7-f212144500f8").subscribe();
  }
}
