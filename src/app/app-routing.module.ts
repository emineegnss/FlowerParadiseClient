import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { HomeComponent } from './ui/components/home/home.component';

const routes: Routes = [
  {path:"admin", component:LayoutComponent,children:[
    {path:"",component:DashboardComponent},
    {path:"customers",loadChildren: ()=>import("./admin/components/customers/customers.module").then(module=>module.CustomersModule)},
    {path:"flowers",loadChildren: ()=>import("./admin/components/flowers/flowers.module").then(module=>module.FlowersModule)},
    {path:"orders",loadChildren: ()=>import("./admin/components/orders/orders.module").then(module=>module.OrdersModule)},
  ]},
  {path:"",component:HomeComponent},
  {path:"cart",loadChildren:()=>import("./ui/components/carts/carts.module").then(module=>module.CartsModule)},
  {path:"flowers",loadChildren:()=>import("./ui/components/flowers/flowers.module").then(module=>module.FlowersModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
