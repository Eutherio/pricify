import { Component } from '@angular/core';

import { IProduct } from './product';

@Component({
  moduleId: module.id,
  selector: 'product',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.css']
})
export class ProductComponent {
  id: string;
  title: string;
  description: string;
  sector: string;
  formQty: number = 1;

  addForm(): void {
    this.formQty++;
  }
}
