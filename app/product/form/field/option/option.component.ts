import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { IOption } from './option';

@Component({
  moduleId: module.id,
  selector: 'py-option',
  templateUrl: 'option.component.html',
  styleUrls: ['option.component.css']
})
export class OptionComponent implements OnInit{
  type: string;
  label: string;
  value: string;
  field: string;
  @Input() fieldType: string;
  @Input() localId: number;
  @Input() optionsQty: number;
  @Output() removeClicked: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(){
    console.log(this.localId);
    
  }

  removeMe(){
    this.removeClicked.emit(this.localId);
  }
}
