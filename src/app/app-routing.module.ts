import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NofoundComponent } from './components/nofound/nofound.component';
import { ProtoflioComponent } from './components/protoflio/protoflio.component';

const routes: Routes = [
  
  {
    path:"" ,component:HomeComponent,pathMatch:'full'
  },
  {
    path:"home" ,component:HomeComponent
  },
  {
    path:"protoflio" ,component:ProtoflioComponent
  },
  {
    path:"about" ,component:AboutComponent
  },
  {
    path:"contact" ,component:ContactComponent
  },
  {
    path:"**" ,component:NofoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule ]
})
export class AppRoutingModule { }
