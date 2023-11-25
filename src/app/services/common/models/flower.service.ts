import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Create_Flower } from 'src/app/contracts/create_flower';

@Injectable({
  providedIn: 'root',
})
export class FlowerService {
  constructor(private httpClientService: HttpClientService) {}
  create(flower: Create_Flower, successCallBack?: any) {
    console.log(flower);

    this.httpClientService
      .post(
        {
          controller: 'flowers',
        },
        flower
      )
      .subscribe((result) => {
        successCallBack();
      });
  }
}
