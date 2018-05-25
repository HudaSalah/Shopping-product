import { Component, OnInit} from '@angular/core';
import {RouterModule,Router } from '@angular/router';// for routing
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent implements OnInit {


  params:object;  
  all:Array<object> = this.ProdData.sendItem;
  quantity:any;

  constructor(private ProdData:ProductServiceService , private router:Router) {
    console.log(this.all); 
  this.quantity = this.ProdData.Qty;  
    // this.ProdData.sendItem.subscribe( (AllProd)=> {console.log(AllProd);} );  
   }

   //delete this prod
   delFromCart(O:object):void
   {
     let k = this.all.indexOf(O);
     console.log(k);
     for(let i=0 ; i<this.all.length; i++)
      {
        this.all.splice(k,1);
      }
   }
   
   //view detail
   redirectTo( i:object):void
   {
     console.log(i);
     this.params= i;
     this.ProdData.Qty = this.quantity;
     this.router.navigate(['/ProdView'],{queryParams:this.params})
   }

   //get quantity
   onKey(event:any):void{
    this.quantity = event.target.value;
    this.ProdData.Qty = this.quantity;
        console.log(this.quantity);
  }

  ngOnInit() {
  }

}
