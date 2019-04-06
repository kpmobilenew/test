import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TouchID } from '@ionic-native/touch-id/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from './Components/Login/Login.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/Home/Home.component';


const appRoutes: Routes = [
   { path: 'Login', component: LoginComponent },
   { path: '', redirectTo: 'Login', pathMatch: 'full' }
]

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      HomeComponent
   ],
   entryComponents: [
      LoginComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      RouterModule.forRoot(appRoutes, { useHash: true }),
   ],
   schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ],
   providers: [
      StatusBar,
      SplashScreen,
      TouchID
   ],
   bootstrap: [
      AppComponent
   ]
})





export class AppModule {
  
}
