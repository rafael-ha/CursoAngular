import { NgModule } from "@angular/core";
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations:[
    SidebarComponent
  ],
  exports:[
    SidebarComponent
  ],
  imports:[
    BrowserModule
  ]
})
export class SharedModule{}
