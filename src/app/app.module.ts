import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PaginationComponent } from './pagination/pagination.component';
import { TaxonomyComponent } from './taxonomy/taxonomy.component';
import { TaxonomylistComponent } from './taxonomy/taxonomylist/taxonomylist.component';
import { TaxonomyeditComponent } from './taxonomy/taxonomyedit/taxonomyedit.component';
import { HttpClientModule} from '@angular/common/http';
//import { environment} from '../environments/environment';

const routes: Routes=[
  { path: '', redirectTo: '/taxonomylist', pathMatch: 'full' },
  {path: 'taxonomylist', component:TaxonomylistComponent},
  {path: 'taxonomylist/:id', component:TaxonomyeditComponent},
  {path: 'taxonomylist/add', component:TaxonomyeditComponent} 
]


@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    TaxonomyComponent,
    TaxonomylistComponent,
    TaxonomyeditComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,  
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
