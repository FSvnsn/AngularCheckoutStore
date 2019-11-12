import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products = [
    {
      name: "Death Stranding",
      director: "Hideo Kojima",
      image: "https://www.indiewire.com/wp-content/uploads/2019/10/Death-Stranding-logo.jpg?w=780"
    },
    {
      name: "God of War",
      director: "Cory Barlog",
      image: "https://cdn.gamer-network.net/2017/usgamer/God-of-War-2018-Header-01.jpg/EG11/thumbnail/1920x1080/format/jpg/quality/75/12-12-2018-god-of-war-walkthrough-guide-beginners-guide.jpg"
    }
  ];
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/