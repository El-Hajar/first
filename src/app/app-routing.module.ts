import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DetailsPage } from './details/details.page';
// import {
//   redirectUnauthorizedTo,
//   redirectLoggedInTo,
//   canActivate,
//   AuthGuard,
// } from '@angular/fire/auth-guard';
import { AuthGuard } from './guards/auth.guard'; 

const routes: Routes = [
  {
    path: 'formations',
    loadChildren: () => import('./formations/formations.module').then( m => m.HomePageModule),
    //canActivate:[AuthGuard]
    
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule),
    
  },
  {
    path: 'details/:id',
    //loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
     component: DetailsPage,
     pathMatch: 'full',
     //canActivate:[AuthGuard]
     
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
