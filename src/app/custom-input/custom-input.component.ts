import {Component, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CustomInputComponent,
    multi: true
  }]
})
export class CustomInputComponent implements ControlValueAccessor {

  @Input() name: string;
  currentValue: string;
  onChange = (value) => {};
  onTouch = (value) => {};

  writeValue(value) {
    this.currentValue = value;
  }

  setValue(value) {
    this.currentValue = value;
    this.onChange(this.currentValue);
    this.onTouch(this.currentValue);
  }

  clearValue() {
    this.currentValue = '';
    this.onChange(this.currentValue);
    this.onTouch(this.currentValue);
  }

  registerOnTouched(fn) {
    this.onTouch = fn;
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }
}
