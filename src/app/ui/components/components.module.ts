import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlowersComponent } from './flowers/flowers.component';
import { HomeComponent } from './home/home.component';
import { CartsComponent } from './carts/carts.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlowersComponent,
    HomeComponent,
    CartsComponent

  ]
})
export class ComponentsModule { }
