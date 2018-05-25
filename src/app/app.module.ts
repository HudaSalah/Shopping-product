import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; //ng bootstrap
import { AngularFontAwesomeModule } from 'angular-font-awesome';// font awesom
import { HttpClientModule } from '@angular/common/http'; //for service
import { RouterModule, ActivatedRoute, Routes } from '@angular/router';// for routing
import { FormsModule } from '@angular/forms'; // to validate form
import { Ng2SearchPipeModule } from 'ng2-search-filter';

//components
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CartProductComponent } from './cart-product/cart-product.component';
import { CartFormComponent } from './cart-form/cart-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ListViewComponent } from './list-view/list-view.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { ProdViewComponent } from './prod-view/prod-view.component';
import { GetProdDataService } from './get-prod-data.service'; //for import service
import { ProductServiceService } from './product-service.service';

//my routes

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'ProdView', component: ProdViewComponent },
  { path: 'GridView', component: GridViewComponent },
  { path: 'ListView', component: ListViewComponent },
  { path: 'CartForm', component: CartFormComponent },
  { path: 'CartProduct', component: CartProductComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CartProductComponent,
    CartFormComponent,
    ProductListComponent,
    ListViewComponent,
    GridViewComponent,
    ProdViewComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    AngularFontAwesomeModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [GetProdDataService, ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
