import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { FormationsPage } from './formations.page';

import { FormationsPageRoutingModule } from './formations-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormationsPageRoutingModule
  ],
  declarations: [FormationsPage]
})
export class HomePageModule {}
