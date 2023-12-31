import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Create_Flower } from 'src/app/contracts/create_flower';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FlowerService {
  constructor(private httpClientService: HttpClientService) {}
  create(flower: Create_Flower, successCallBack?: any, errorCallBack?:any) {
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
      },(errorResponse:HttpErrorResponse)=>{
       const _error : Array<{key: string,value: Array<string>}>=  errorResponse.error;
       let message = "";
       _error.forEach((v,index)=>{
        v.value.forEach((_v, _index)=>{
          message += `${_v}<br>`;
        })
       })
       errorCallBack(message);
      });
  }
}
