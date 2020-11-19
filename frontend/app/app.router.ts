import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { OrderListComponent } from './order-list/order-list.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  {
    path: 'orders',
    component: OrderListComponent
  },
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: '**',
    component: HomepageComponent
  },
];

@NgModule({
  imports: [
    HttpClientModule,

    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule {}
