import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'; //to get param here
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-prod-view',
  templateUrl: './prod-view.component.html',
  styleUrls: ['./prod-view.component.scss']
})
export class ProdViewComponent implements OnInit {
  
  Val :any = 1;  
  ComeProduct :object={};

  constructor(private active:ActivatedRoute,private ProdData:ProductServiceService) {
    this.active.queryParams.subscribe(params=> {this.ComeProduct = params});
    console.log(this.ComeProduct);    
   }

   sendDataToCart(i :object):void
   {
     this.ComeProduct = i;
     this.ProdData.sendItem.push(this.ComeProduct);
   }
   
   
   onKey(event:any):void{
     this.Val = event.target.value;
     this.ProdData.Qty = this.Val;
         console.log(this.Val);
   }

  ngOnInit() {
  }

}
