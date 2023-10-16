import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlowersComponent } from './flowers.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FlowersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:FlowersComponent},
    ])
  ],
 
})
export class FlowersModule { }
