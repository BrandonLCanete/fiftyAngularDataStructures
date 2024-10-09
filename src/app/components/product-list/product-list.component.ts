import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

    // List of Products
    productList: string[] = ["Diapers","Can Foods","Snacks","Bread"];

    // Variable
    product: string = "";

    // Add Function
    Add(){
      if(this.product.trim()){
        this.productList.push(this.product);
      }
      this.product = "";
    }

    // Delete Function
    Delete(index : number){
      this.productList.splice(index,1);
    }
}
