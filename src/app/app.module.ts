import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { UiModule } from './ui/ui.module';
import { ComponentsModule } from './admin/layout/components/components.module';
import { HeaderComponent } from './admin/layout/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    UiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
