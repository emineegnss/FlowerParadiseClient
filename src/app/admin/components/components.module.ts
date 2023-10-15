import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlowersModule } from './flowers/flowers.module';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';
import { DashboardModule } from './dashboard/dashboard.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlowersModule,
    CustomersModule,
    OrdersModule,
    DashboardModule
  ]
})
export class ComponentsModule { }
