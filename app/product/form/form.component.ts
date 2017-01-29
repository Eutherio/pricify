import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IForm } from './form';

@Component({
  moduleId: module.id,
  selector: 'py-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css']
})
export class FormComponent implements OnInit {
  id: string;
  title: string;
  description: string;
  type: string = 'contact';
  product: string;
  fields: number[] = [1];
  @Input() localId: number;
  @Input() formsQty: number;
  @Output() removeClicked: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit():void{

  }
  removeMe(): void {
    this.removeClicked.emit(this.localId);
  }
  addField(): void {
    let sorted = this.fields.sort(),
        last = sorted[sorted.length - 1];
    
    this.fields.push(last + 1)
  }
  removeField(id: number): void {
    this.fields = this.fields.filter(e => e != id);
  }
}
