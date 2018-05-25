import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'; //to get param here
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-prod-view',
  templateUrl: './prod-view.component.html',
  styleUrls: ['./prod-view.component.scss']
})
export class ProdViewComponent implements OnInit {

  ComeProduct :object={};
  constructor(private active:ActivatedRoute,private ProdData:ProductServiceService) {
    this.active.queryParams.subscribe(params=> {this.ComeProduct = params});
    console.log(this.ComeProduct);
   }

   sendDataToCart( i:object):void
   {
     this.ComeProduct=i;
     console.log(this.ComeProduct);
     this.ProdData.sendItem.push(this.ComeProduct);
   }
   
  ngOnInit() {
  }

}
