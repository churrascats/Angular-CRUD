import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Product } from './products.model'
import { environment } from 'src/environments/environment.dev'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    })
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(environment.baseUrl, product)
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.baseUrl)
  }

  readById(id: string | null): Observable<Product> {
    return this.http.get<Product>(`${environment.baseUrl}/${id}`)
  }

  update(product: Product): Observable<Product> {
    return this.http.put<Product>(`${environment.baseUrl}/${product.id}`, product)
  }

  delete(id: string | null): Observable<Product> {
    return this.http.delete<Product>(`${environment.baseUrl}/${id}`)
  }
}
