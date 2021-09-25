import { Component, OnInit } from '@angular/core'
import { ProductsService } from '../products.service'
import { Router } from '@angular/router'
import { Product } from '../products.model'

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css'],
})
export class ProductsCreateComponent implements OnInit {
  newProduct: Product = {
    name: '',
    price: null,
  }

  constructor(
    private productsService: ProductsService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  createProduct(): void {
    this.productsService.create(this.newProduct).subscribe(() => {
      try {
        this.productsService.showMessage('Product Created!')
        this.router.navigate(['/products'])
      } catch (err) {
        this.productsService.showMessage(
          `Unsuccessful request: an error${err} has happened`,
        )
      }
    })
  }

  cancelOperation(): void {
    this.router.navigate(['/products'])
  }
}
