import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Create_Flower } from 'src/app/contracts/create_flower';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { FlowerService } from 'src/app/services/common/models/flower.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent extends BaseComponent implements OnInit {
 constructor( private httpClientService: HttpClientService,spinner: NgxSpinnerService, private flowerService: FlowerService, private  alertify: AlertifyService){
  super(spinner)
 }
  ngOnInit(): void {
  }
  create(name: HTMLInputElement,stock: HTMLInputElement, price:HTMLInputElement){
    console.log(name.value, stock.value, price.value);
    this.showSpinner(SpinnerType.BallAtom);
    const create_flower : Create_Flower = new Create_Flower();
   
    create_flower.name = name.value;
    create_flower.stock = parseInt(stock.value);
    create_flower.price = parseFloat(price.value);
    create_flower.speciesId = '';
    if(!name.value){
      this.alertify.message("Name Alanını doldurunuz",{
        dismissOther: true,
        messageType: MessageType.Warning,
        position: Position.TopRight
      });
      return;
    }
    if(parseInt(stock.value)<0){
      this.alertify.message("Stock Alanını 0 dan büyük olmalıdır",{
        dismissOther: true,
        messageType: MessageType.Warning,
        position: Position.TopRight
      });
      return;
    }
    this.flowerService.create(create_flower, () => {
      this.hideSpinner(SpinnerType.BallSpin);
      this.alertify.message("Ürün Başarılı Şekilde Eklenmiştir",{
        dismissOther: true,
        messageType: MessageType.Success,
        position: Position.TopRight
      });
    } ,errorMessage=>{
      this.alertify.message(errorMessage,{
        dismissOther:true,
        messageType:MessageType.Error,
        position:Position.TopRight
      })
    }
     );

  }

}
