import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlowersComponent } from './flowers/flowers.component';
import { HomeComponent } from './home/home.component';
import { CartsComponent } from './carts/carts.component';
import { FlowersModule } from './flowers/flowers.module';
import { HomeModule } from './home/home.module';
import { CartsModule } from './carts/carts.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, FlowersModule, CartsModule, HomeModule],
})
export class ComponentsModule {}
