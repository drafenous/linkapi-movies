import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() type = 'text' as string;
  @Input() placeholder: string;
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

  inputChange(event){
    this.newValue.emit(this.value);
  }
}
