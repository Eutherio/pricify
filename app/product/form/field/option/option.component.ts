import { Component, Input } from '@angular/core';

import { IOption } from './option';

@Component({
  moduleId: module.id,
  selector: 'py-option',
  templateUrl: 'option.component.html',
  styleUrls: ['option.component.css']
})
export class OptionComponent {
  type: string;
  label: string;
  value: string;
  field: string;
  @Input() fieldType: string;
}
