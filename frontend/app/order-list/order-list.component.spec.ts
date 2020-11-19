import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material';
import { OrderListComponent } from './order-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataService } from '../data.service';

describe('OrderListComponent', () => {
  let component: OrderListComponent;
  let fixture: ComponentFixture<OrderListComponent>;
  let dataUrl = 'http://localhost:4300/orders';  // URL to web api


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatTableModule, MatPaginatorModule, HttpClientTestingModule, BrowserAnimationsModule],
      providers: [DataService],
      declarations: [
        OrderListComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

  });

  it('should call the city pantry api', inject([DataService], service => {
    service.getData(dataUrl).subscribe(data => {
      expect(data).toContain('items');
    });
  }));

  it('should contain an order table', () => {
    const table = fixture.debugElement.queryAll(By.css('.table'));
    expect(table).toBeTruthy();
  });
});
