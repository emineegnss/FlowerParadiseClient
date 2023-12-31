import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlowersComponent } from './flowers.component';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CreateComponent } from './create/create.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ListComponent } from './list/list.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    FlowersComponent,
    CreateComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forChild([
      {path:"",component:FlowersComponent},
    ])
  ]
})
export class FlowersModule { }
