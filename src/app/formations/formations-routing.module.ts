import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPage } from '../details/details.page';
import { FormationsPage } from './formations.page';

const routes: Routes = [
  {
    path: '',
    component: FormationsPage,

    // children: [
    //    {
    //       path: '/details/:id',
    //        //loadChildren: () => import('../details/details.module').then( m => m.DetailsPageModule)  
    //        component: DetailsPage,
           
    //     },
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormationsPageRoutingModule {}
