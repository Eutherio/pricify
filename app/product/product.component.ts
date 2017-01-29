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
  forms: number[] = [1];
  formQty: number = 1;

  addForm(): void {
    let sorted = this.forms.sort(),
        last = sorted[sorted.length - 1];
    
    this.forms.push(last + 1)
  }
  removeForm(id: number): void {
    this.forms = this.forms.filter(e => e != id);
  }
}
