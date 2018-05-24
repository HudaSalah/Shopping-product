import { Component, OnInit } from '@angular/core';
import {NgForm , NgModel} from '@angular/forms'; // for validate form to angular form

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.scss']
})
export class CartFormComponent implements OnInit {

  User:object;
  constructor() { 
    this.User={
            email:"",
            phone:"",
            address:""
    };
  }

  submit(Data:NgForm):void
  {
    if(Data.valid){
      console.log(this.User);
      this.User={};
    }
    else
      {
        alert("Please enter valid data");
        console.log("error"); 
      }
     
  }

  ngOnInit() {
  }

}
