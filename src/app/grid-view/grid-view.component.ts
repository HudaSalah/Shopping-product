import { Component, OnInit } from '@angular/core';
import { GetProdDataService } from '../get-prod-data.service'; //for import service
import {RouterModule,Router } from '@angular/router';// for routing
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {

  ProductData:Array<object>; // gay mn json
  params:object; // htrp7 l view details
  AllProd:Array<object>;

    constructor(private Data:GetProdDataService , private router:Router, private ProdData:ProductServiceService) { 
      this.ProductData=[];
      this.params={
        name:"",
        price:"",
        desc:"",
        categ:"",
        image:""
      };
      this.AllProd=[];
    }
  
    getProductData():void{
      let path:string ='../assets/product-data.json';
      this.Data.getData(path).subscribe(
        res =>{
          this.ProductData = res; //return jsin data in this arr
          console.log(this.ProductData);},
        err =>{console.log(err);},
        ()=>{}
      );
    }
  
    redirectTo( i:object):void
    {
      console.log(i);
      this.params= i;
      this.router.navigate(['/ProdView'],{queryParams:this.params})
    }


    sendDataToCart(i:object):void
    {
      this.AllProd.push(i);
      console.log(this.AllProd);
      this.ProdData.sendItem=this.AllProd;
      // this.ProdData.sendItem.emit(this.AllProd);
    }
    
    ngOnInit() {
      this.getProductData();
    }
}
