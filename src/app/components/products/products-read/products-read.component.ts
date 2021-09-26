import { Component, OnInit } from '@angular/core'
import { Product } from '../products.model'
import { ProductsService } from '../products.service'

@Component({
  selector: 'app-products-read',
  templateUrl: './products-read.component.html',
  styleUrls: ['./products-read.component.css'],
})
export class ProductsReadComponent implements OnInit {
  products: Product[] = []

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService
      .read()
      .subscribe((response) => (this.products = [...response]))
  }
}
