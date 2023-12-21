import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit{
  items : Product[] = [];
  totalPrice:number = 0;
  constructor(private cartService : CartService){}

  ngOnInit(): void {
    
    this.cartService.getCartItems().subscribe(item => {this.items = item;
    this.totalPrice = this.getTotalPrice();
  });
    
  }

  getTotalPrice():number{
    let total = 0 ;
    for(let item of this.items){
      total += item.price;
    }
    return total;
  }

  clearCart(){
    this.cartService.clearCart().subscribe();
  }

  checkOutCart(){
    this.cartService.checkOutCart(this.items).subscribe();
  }
}
