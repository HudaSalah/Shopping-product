import { Component, OnInit } from '@angular/core';
import { GetProdDataService } from '../get-prod-data.service'; //for import service
import {RouterModule,Router } from '@angular/router';// for routing

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {

  ProductData:Array<object>;
  params:object;
  
    constructor(private Data:GetProdDataService , private router:Router) { 
      this.ProductData=[];
      this.params={
        name:"",
        price:"",
        desc:"",
        categ:"",
        image:""
      };
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
    
    redirectTo( i:number):void
    {
      console.log(i);
      var AllData = this.ProductData[i];
      console.log(AllData.Name);
      this.params={
        name:AllData.Name,
        price:AllData.Price,
        desc:AllData.Desc,
        categ:AllData.Catego,
        image:AllData.Img
      };
      this.router.navigate(['/ProdView'],{queryParams:this.params})
    }
    
    ngOnInit() {
      this.getProductData();
    }
}
