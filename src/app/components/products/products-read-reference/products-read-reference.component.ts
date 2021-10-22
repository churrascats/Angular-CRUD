import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductsReadReferenceDataSource, ProductsReadReferenceItem } from './products-read-reference-datasource';

@Component({
  selector: 'app-products-read-reference',
  templateUrl: './products-read-reference.component.html',
  styleUrls: ['./products-read-reference.component.css']
})
export class ProductsReadReferenceComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ProductsReadReferenceItem>;
  dataSource: ProductsReadReferenceDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor() {
    this.dataSource = new ProductsReadReferenceDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
