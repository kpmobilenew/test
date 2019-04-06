import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './Components/Login/Login.component';
import {HomeComponent} from './Components/Home/Home.component';

const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
