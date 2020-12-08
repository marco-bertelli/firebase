import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'login', loadChildren: () => import('./features/user/user.module').then(m => m.UserModule)
  },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
