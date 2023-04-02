import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProtoflioComponent } from './components/protoflio/protoflio.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NofoundComponent } from './components/nofound/nofound.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProtoflioComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    NofoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
