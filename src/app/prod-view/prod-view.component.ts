import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'; //to get param here
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-prod-view',
  templateUrl: './prod-view.component.html',
  styleUrls: ['./prod-view.component.scss']
})
export class ProdViewComponent implements OnInit {

  Val: any;
  ComeProduct: object = {};

  constructor(private active: ActivatedRoute, private ProdData: ProductServiceService) {
    this.active.queryParams.subscribe(params => { this.ComeProduct = params });
    console.log(this.ComeProduct);
  }

  sendDataToCart(): void {
    console.log( this.ComeProduct );
    this.ProdData.Qty = this.Val;
    if((this.ProdData.sendItem != undefined) || (this.ProdData.sendItem == undefined ))
      {
        this.ProdData.sendItem.push(this.ComeProduct);
      }
  }


  onKey(event: any): void {
    this.Val = event.target.value;
    console.log(this.Val);
  }

  ngOnInit() {
    if(this.ProdData.Qty != undefined)
      {
        this.Val = this.ProdData.Qty;
      }
      else
        {
          this.Val = 1;
        }
  }

}
