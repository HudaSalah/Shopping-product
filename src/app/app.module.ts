import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; //ng bootstrap
import { AngularFontAwesomeModule } from 'angular-font-awesome';// font awesom

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CartProductComponent } from './cart-product/cart-product.component';
import { CartFormComponent } from './cart-form/cart-form.component';
import { SearchNavComponent } from './search-nav/search-nav.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ListViewComponent } from './list-view/list-view.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { ProdViewComponent } from './prod-view/prod-view.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CartProductComponent,
    CartFormComponent,
    SearchNavComponent,
    ProductListComponent,
    ListViewComponent,
    GridViewComponent,
    ProdViewComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }