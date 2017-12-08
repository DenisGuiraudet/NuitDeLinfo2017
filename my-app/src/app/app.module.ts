import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { PageFormationComponent } from './page-formation/page-formation.component';
import { PageStatComponent } from './page-stat/page-stat.component';
import { PageAidComponent } from './page-aid/page-aid.component';
import { PageAnnuaireComponent } from './page-annuaire/page-annuaire.component';
import { PageBlogComponent } from './page-blog/page-blog.component';
import { AppRoutingModule } from './/app-routing.module';
import { PagePratiqueComponent } from './page-pratique/page-pratique.component';


@NgModule({
  declarations: [
    AppComponent,
    PageFormationComponent,
    PageStatComponent,
    PageAidComponent,
    PageAnnuaireComponent,
    PageBlogComponent,
    PagePratiqueComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatButtonModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
