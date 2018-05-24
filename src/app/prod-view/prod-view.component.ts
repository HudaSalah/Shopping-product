import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'; //to get param here

@Component({
  selector: 'app-prod-view',
  templateUrl: './prod-view.component.html',
  styleUrls: ['./prod-view.component.scss']
})
export class ProdViewComponent implements OnInit {

  ComeProduct :object;
  constructor(private active:ActivatedRoute) {
    this.active.queryParams.subscribe(params=> {this.ComeProduct = params});
    console.log(this.ComeProduct);
   }

   
   
  ngOnInit() {
  }

}
