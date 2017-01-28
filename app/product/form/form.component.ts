import { Component } from '@angular/core';

import { IForm } from './form';

@Component({
  moduleId: module.id,
  selector: 'py-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css']
})
export class FormComponent {
  id: string;
  title: string;
  description: string;
  type: string = 'contact';
  product: string;
  fieldQty: number = 1;

  addField(): void {
    this.fieldQty++;
  }
}
