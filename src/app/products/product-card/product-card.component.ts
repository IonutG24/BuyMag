import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/productsModel/items';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProdcutCardComponent implements OnInit {
  @Input() item!: Item;

  constructor() {}

  ngOnInit(): void {}
}
