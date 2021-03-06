
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//自定义组件
import { AboutPage } from '../pages/about/about';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/wode/login/login';
import { RegisterPage } from '../pages/wode/register/register';
import { MePage } from '../pages/wode/me/me'; //我的主页
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConfigProvider } from '../providers/config/config';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { HttpServicesProvider } from '../providers/http-services/http-services';
import { StorageProvider } from '../providers/storage/storage';
import { RegistersignPage } from '../pages/wode/registersign/registersign';


import { IdeaPage } from '../pages/wode/idea/idea'; // 意见反馈页
import { WritePage } from '../pages/wode/write/write'; //意见反馈-意见书写页
import { LikePage } from '../pages/wode/like/like';  //我的收藏页
import { YueliPage } from '../pages/wode/yueli/yueli'; //我的阅历页
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    MePage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    RegistersignPage,
    IdeaPage,
    WritePage,
    LikePage,
    YueliPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    MePage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    RegistersignPage,
    IdeaPage,
    WritePage,
    LikePage,
    YueliPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConfigProvider,
    HttpServicesProvider,
    HttpClient,
    StorageProvider
  ]
})
export class AppModule {}
