import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Product } from '../products.model'
import { ProductsService } from '../products.service'

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
})
export class ProductUpdateComponent implements OnInit {
  constructor(
    private productService: ProductsService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  product: Product = {
    name: '',
    price: null,
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe((product) => {
      this.product = { ...product }
    })
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Successful Update')
      this.backToHome()
    })
  }

  cancelOperation(): void {
    this.backToHome()
  }

  backToHome(): void {
    this.router.navigate(['/products'])
  }
}
