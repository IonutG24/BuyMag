import { Component, OnInit } from '@angular/core';
import { foods, stuffs } from '../products';
import { Item } from '../productsModel/items';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  allProducts: {
    foods: Item[];
    stuffs: Item[];
  } = { foods: [], stuffs: [] };

  constructor() {}

  ngOnInit(): void {
    this.allProducts.foods = foods;
    this.allProducts.stuffs = stuffs;

    console.log(this.allProducts);

    localStorage.setItem('Foods', JSON.stringify(foods));
    localStorage.setItem('Stuff', JSON.stringify(stuffs));
  }
}
