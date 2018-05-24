import { Component, OnInit } from '@angular/core';
import { GetProdDataService } from '../get-prod-data.service'; //for import service

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  ProductData:Array<object>;

  constructor(private Data:GetProdDataService) { 
    this.ProductData=[];
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
  
  ngOnInit() {
    this.getProductData();
  }

}
