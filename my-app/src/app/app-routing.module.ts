import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageFormationComponent } from './page-formation/page-formation.component';
import { PageStatComponent } from './page-stat/page-stat.component';
import { PageAidComponent } from './page-aid/page-aid.component';
import { PageAnnuaireComponent } from './page-annuaire/page-annuaire.component';
import { PageBlogComponent } from './page-blog/page-blog.component';
import { PagePratiqueComponent } from './page-pratique/page-pratique.component';

const routes: Routes = [
  { path: 'page-pratique', component: PagePratiqueComponent },
  { path: 'page-formation', component: PageFormationComponent },
  { path: 'page-stat', component: PageStatComponent },
  { path: 'page-blog', component: PageBlogComponent },
  { path: 'page-annuaire', component: PageAnnuaireComponent },
  { path: 'page-aid', component: PageAidComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
