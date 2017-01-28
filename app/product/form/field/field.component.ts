import { Component, Input } from '@angular/core';

import { IField } from './field';

@Component({
  moduleId: module.id,
  selector: 'py-field',
  templateUrl: 'field.component.html',
  styleUrls: ['field.component.css']
})
export class FieldComponent {
  name: string;
  type: string = 'input';
  output: string;
  form: string;
  optionQty: number = 2;
  @Input() formType: string;

  addOption(){
    this.optionQty++;
  }
}
