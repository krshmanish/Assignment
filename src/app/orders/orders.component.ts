import { Component, OnInit } from '@angular/core';
import { OrderService } from 'app/service/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.less']
})
export class OrdersComponent implements OnInit {

  orderList: any;
  count: number;
  constructor(private orderService: OrderService) {
    this.orderList = null;
    this.count = 0;
   }

  ngOnInit() {
    this.getorderList();
  }

  getorderList() {
    this.orderList = this.orderService.getAllOrders();
    this.count = this.orderList.length;
  }

  cancelOrder(i) {
    if(confirm('Are you sure to cancel this order')) {
    this.orderService.cancelOrder(i);
    this.getorderList();
    alert('Your order is cancelled...');
    }
  }
}
