import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() listOptions: object[];
  @Input() value: string;
  @Input() required: boolean;
  @Input() disabled: boolean;
  @Input() readonly: boolean;
  @Input() name: string;
  @Output() newValue = new EventEmitter();
  @Input() label: string;

  constructor() { }

  ngOnInit(): void {
  }

  selectChange(event){
    this.newValue.emit(this.value);
  }
}
