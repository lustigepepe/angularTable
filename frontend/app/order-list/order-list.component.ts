import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';
// import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Items, Data } from '../data';
import { DataService } from '../data.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent {

  items: MatTableDataSource<Items>;

  displayedItemsColumns: string[] = ['customer', 'vendor', 'delivered', 'price total', 'items count'];
  private dataSliceUrl = '4300/orders';  // URL to web api
  @ViewChild(MatPaginator, { static: false })
  paginator: MatPaginator;

  constructor(
    private dataService: DataService) { }

  ngOnInit() {
    const url = new URL(window.location.href);
    this.dataSliceUrl = url.protocol + '//' + url.hostname + ':' + this.dataSliceUrl;
    this.getData();
  }

  getData(): void {
    this.dataService.getData<Data>(this.dataSliceUrl)
      .subscribe((data: Data) => {
        this.items = new MatTableDataSource<Items>(data.items);
        this.items.paginator = this.paginator;
      })
  }
}
