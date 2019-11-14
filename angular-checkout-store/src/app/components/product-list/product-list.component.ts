import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  constructor(private cartService: CartService){
  }

  products = [
    {
      name: "Death Stranding",
      director: "Hideo Kojima",
      image: "https://www.indiewire.com/wp-content/uploads/2019/10/Death-Stranding-logo.jpg?w=780",
      price: 60
    },
    {
      name: "God of War",
      director: "Cory Barlog",
      image: "https://cdn.gamer-network.net/2017/usgamer/God-of-War-2018-Header-01.jpg/EG11/thumbnail/1920x1080/format/jpg/quality/75/12-12-2018-god-of-war-walkthrough-guide-beginners-guide.jpg",
      price: 55
    },
    {
      name: "The Last of Us",
      director: "Neil Druckmann",
      image: "https://fsmedia.imgix.net/d3/06/7d/0a/66b9/41b6/9afe/4ceef0a65592/thelastofus0603131600jpg.jpeg?rect=316%2C0%2C1200%2C600&auto=format%2Ccompress&dpr=2&w=650",
      price: 40
    },
    {
      name: "Cyperpunk 2077",
      director: "Richard Borzymowski",
      image: "https://cdn.wccftech.com/wp-content/uploads/2019/06/keanu-reeves-cyberpunk-2077-johnny-silverhand.jpg",
      price: 69
    }
  ];

  addToCart(product){
    this.cartService.addToCart(product);
    console.log(this.cartService.getCart());;
  }
}