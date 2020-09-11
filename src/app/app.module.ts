import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore'
import {FIREBASE_CONFIG} from '../../private-data/firebase-config';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { MyWorkComponent } from './home/my-work/my-work.component';
import { AboutSiteComponent } from './home/about-site/about-site.component'
import { AboutMeComponent } from './home/about-me/about-me.component';
import { GetInTouchComponent } from './home/get-in-touch/get-in-touch.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {MatFormFieldModule, MatInputModule, MatNativeDateModule, MatSidenavModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './home/footer/footer.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {HttpClientModule} from '@angular/common/http';
import { LinkComponent } from './shared/link/link.component';
import { SassHelperComponent } from './provider/sass-helper/sass-helper.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutSiteComponent,
    MyWorkComponent,
    AboutMeComponent,
    GetInTouchComponent,
    FooterComponent,
    AboutSiteComponent,
    LinkComponent,
    SassHelperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    ScrollingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
