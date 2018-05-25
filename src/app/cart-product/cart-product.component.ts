import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent implements OnInit {
  
  all:Array<object>= this.ProdData.sendItem;
  constructor(private ProdData:ProductServiceService) {
    console.log(this.all); 
    // this.ProdData.sendItem.subscribe( (AllProd)=> {console.log(AllProd);} );    
   }

   
   

  ngOnInit() {
  
  }

}
